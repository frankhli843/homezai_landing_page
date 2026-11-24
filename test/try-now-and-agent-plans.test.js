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

function componentSource(name) {
  const start = appSource.indexOf(`function ${name}(`)
  assert.ok(start >= 0, `${name} is not defined in src/App.jsx`)
  const next = appSource.indexOf('\nfunction ', start + 1)
  return appSource.slice(start, next === -1 ? undefined : next)
}

test('/try-now/ is a real prerendered route with its own metadata', () => {
  assert.ok(STATIC_ROUTES.includes('/try-now/'))
  assert.match(appSource, /<Route path="\/try-now" element={<TryNowPage \/>} \/>/)
  const meta = metaForRoute('/try-now/')
  assert.equal(meta.canonical, 'https://homezai.com/try-now/')
  assert.match(meta.title, /Try Homezai/)
})

test('the Try Now page collects no credentials and hands off to the app', () => {
  const source = componentSource('TryNowPage')
  assert.doesNotMatch(source, /<input|<form|type="password"/)
  assert.match(source, /href={APP_URL}/)
  assert.match(appSource, /const APP_URL = 'https:\/\/app\.homezai\.com'/)
  assert.match(source, /Activate your account/)
  assert.match(source, /Request access/)
})

test('the header CTA is Try Now and points at /try-now', () => {
  const nav = componentSource('Navbar')
  assert.match(nav, /<Link to="\/try-now" className="btn btn-primary btn-pill nav-cta"[\s\S]*?>Try Now<\/Link>/)
})

test('pricing shows Premium Agent free and Pro Agent at $8/month billed $96/year', () => {
  const pricing = componentSource('PricingPage')
  assert.match(pricing, /name: 'Premium Agent'[\s\S]*?price: '\$0'/)
  assert.match(pricing, /name: 'Pro Agent'[\s\S]*?price: '\$8'[\s\S]*?Billed annually at \$96\/year/)
  // The brokerage and MLS/association quote routes stay available.
  assert.match(pricing, /id="quote-form"/)
  assert.match(pricing, /Brokerage Plan/)
  assert.match(pricing, /Enterprise Plan/)
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
