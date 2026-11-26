import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import test from 'node:test'

import { APP_URL, LEGAL_LINKS, NAV_GROUPS } from '../src/site/navigation.js'

/*
 * The navigation follows Brian's Figma redesign (email 2026-11-24, "the navigation
 * menu is different, please look at the Figma design files"): three menus, About Us,
 * Pricing and Partners, then LOG IN and TRY NOW. The blog is presented as Stories
 * inside About Us. This replaces the 2026-10-02 rule that kept a top level Blog link
 * out of the old header; the blog is still a second level link, not a top level item.
 *
 * The header, the mobile menu and the footer all render from src/site/navigation.js,
 * so these tests check that one table and the built page.
 */

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

test('the top level menus are the three the design shows, in order', () => {
  assert.deepEqual(
    NAV_GROUPS.map((group) => [group.label, group.to]),
    [
      ['About Us', '/about'],
      ['Pricing', '/pricing'],
      ['Partners', '/partners/mls'],
    ],
  )
})

test('each menu carries the design items, in order', () => {
  const items = Object.fromEntries(NAV_GROUPS.map((group) => [group.label, group.items.map((item) => `${item.label} ${item.to}`)]))
  assert.deepEqual(items['About Us'], ['Mission /about#our-mission', 'Stories /news', 'News /news', 'Contact /contact'])
  assert.deepEqual(items.Pricing, [
    'Pricing Tiers /pricing#pricing-tiers',
    'Onboarding /pricing#onboarding',
    'Features /pricing#features',
    'FAQ /pricing#pricing-faq',
  ])
  assert.deepEqual(items.Partners, ['MLS /partners/mls', 'Brokerages /partners/brokerages', 'Integrations /integrations'])
})

test('no top level menu is the blog', () => {
  assert.deepEqual(
    NAV_GROUPS.filter((group) => group.to.startsWith('/blog') || /^(blog|stories)$/i.test(group.label)),
    [],
  )
})

test('LOG IN goes to the app and the legal links stay in the footer', () => {
  assert.equal(APP_URL, 'https://app.homezai.com/')
  assert.deepEqual(
    LEGAL_LINKS.map((link) => link.to),
    ['/privacy', '/terms', '/dpa', '/accessibility'],
  )
})

/*
 * The prerendered pages are what visitors and crawlers receive before any script
 * runs, so the same structure is checked against the built HTML when a build exists.
 */
const builtHome = path.join(repoRoot, 'dist', 'index.html')
test('the built home page carries the new header and footer navigation', { skip: !existsSync(builtHome) && 'no build in dist/' }, () => {
  const html = readFileSync(builtHome, 'utf8')
  const nav = html.match(/<nav class="hidden items-center gap-6 md:flex" aria-label="Main navigation">[\s\S]*?<\/nav>/)
  const footer = html.match(/<footer[\s\S]*?<\/footer>/)
  assert.ok(nav && footer, 'the built page must contain the shared header and footer')
  for (const label of ['About Us', 'Pricing', 'Partners', 'LOG IN', 'TRY NOW']) assert.match(nav[0], new RegExp(`>${label}<`))
  assert.match(nav[0], /href="\/news"[^>]*>Stories<\/a>/)
  assert.match(footer[0], /href="\/news"[^>]*>Stories<\/a>/)
  assert.match(footer[0], /href="\/privacy"[^>]*>Privacy Policy<\/a>/)
})
