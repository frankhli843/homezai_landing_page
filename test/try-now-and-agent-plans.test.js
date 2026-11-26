import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import test from 'node:test'

import { PERMANENT_REDIRECTS, STATIC_ROUTES, UNLISTED_ROUTES } from '../src/content/routes.js'
import { metaForRoute } from '../src/content/seo.js'

/*
 * Phase 1 of the new marketing site (Brian, 2026-11-24): roster-first TRY NOW,
 * Premium Agent at $0/month as the default and Pro Agent at $8/month billed
 * annually at $96/year. The login is created only inside app.homezai.com.
 */

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const appSource = readFileSync(path.join(repoRoot, 'src', 'App.jsx'), 'utf8')
const siteSource = (...parts) => readFileSync(path.join(repoRoot, 'src', 'site', ...parts), 'utf8')

test('/try-now/ is a real prerendered route with its own metadata', () => {
  assert.ok(STATIC_ROUTES.includes('/try-now/'))
  assert.match(appSource, /<Route path="\/try-now" element={<TryNowPage \/>} \/>/)
  const meta = metaForRoute('/try-now/')
  assert.equal(meta.canonical, 'https://homezai.com/try-now/')
  assert.match(meta.title, /Try Homezai/)
})

test('the Try Now page collects no credentials and hands off to the app', () => {
  const source = siteSource('pages', 'TryNowPage.jsx')
  assert.doesNotMatch(source, /<input|<form|type="password"|autoComplete=/)
  assert.match(source, /href={APP_URL}/)
  assert.match(siteSource('navigation.js'), /export const APP_URL = 'https:\/\/app\.homezai\.com\/'/)
  assert.match(source, /Activate your account/)
  assert.match(source, /Request access/)
})

test('the header CTA is TRY NOW and points at /try-now', () => {
  const header = siteSource('Header.jsx')
  assert.match(header, /<Link to="\/try-now"[^\n]* className="[^"]*bg-blue-600[^"]*">\s*TRY NOW\s*<\/Link>/)
})

test('pricing shows Premium Agent free and Pro Agent at $8/month billed $96/year', () => {
  const pricing = siteSource('pages', 'PricingPage.jsx')
  assert.match(pricing, />Premium Agent<\/h3>[\s\S]*?>\$0<\/span>/)
  assert.match(pricing, />Pro Agent<\/h3>[\s\S]*?>\$8<\/span>[\s\S]*?Billed yearly · \$96 per year/)
  assert.match(pricing, />Pro Team<\/h3>/)
  assert.match(pricing, />Brokerage Enterprise<\/h3>/)
  assert.match(pricing, /const PRO_MONTHLY_PER_USER = 8/)
  assert.doesNotMatch(pricing, /not defined|coming soon|embed ready/i, 'design placeholders must not ship')
})

test('the legal paths the app used to link answer with redirects to the current pages', () => {
  const targets = Object.fromEntries(PERMANENT_REDIRECTS.map((r) => [r.from, r.to]))
  assert.equal(targets['/terms-conditions/'], '/terms/')
  assert.equal(targets['/privacy-policy/'], '/privacy/')
  for (const from of ['/terms-conditions/', '/privacy-policy/']) {
    assert.ok(UNLISTED_ROUTES.includes(from), `${from} must stay out of the sitemap`)
  }
})

const dist = path.join(repoRoot, 'dist')
test('the build emits /try-now/ and both legal redirect documents', { skip: !existsSync(path.join(dist, 'index.html')) && 'no build in dist/' }, () => {
  const tryNow = readFileSync(path.join(dist, 'try-now', 'index.html'), 'utf8')
  assert.match(tryNow, /<link rel="canonical" href="https:\/\/homezai\.com\/try-now\/"/)
  assert.match(tryNow, /Activate your account/)
  assert.doesNotMatch(tryNow, /<input/)
  assert.doesNotMatch(tryNow, /type="password"/)
  for (const [from, to] of [['terms-conditions', '/terms/'], ['privacy-policy', '/privacy/']]) {
    const html = readFileSync(path.join(dist, from, 'index.html'), 'utf8')
    assert.match(html, new RegExp(`<meta http-equiv="refresh" content="0; url=https://homezai\\.com${to}">`))
    assert.match(html, /<meta name="robots" content="noindex, follow">/)
  }
  const sitemap = readFileSync(path.join(dist, 'sitemap.xml'), 'utf8')
  assert.match(sitemap, /https:\/\/homezai\.com\/try-now\//)
  assert.doesNotMatch(sitemap, /terms-conditions|privacy-policy/)
})


test('free Premium is the default plan and paid Pro remains optional in the rendered pricing page', { skip: !existsSync(path.join(dist, 'pricing', 'index.html')) && 'no pricing build' }, () => {
  const html = readFileSync(path.join(dist, 'pricing', 'index.html'), 'utf8')
  const cards = [...html.matchAll(/<article\b[^>]*>[\s\S]*?<\/article>/g)].map((match) => match[0])
  const premium = cards.find((card) => />Premium Agent<\/h3>/.test(card))
  const pro = cards.find((card) => />Pro Agent<\/h3>/.test(card))
  assert.ok(premium && pro, 'both agent plans must be present')
  assert.match(premium, /Default plan/)
  assert.match(pro, /Optional upgrade/)
  assert.doesNotMatch(pro, /Default plan|Recommended/)
})
