import test from 'node:test'
import { readFileSync, existsSync } from 'node:fs'
import assert from 'node:assert/strict'
import { legacyRedirectFor } from '../src/site/legacyRedirects.js'

const retained = ['/', '/pricing', '/pricing/', '/integrations', '/contact', '/privacy', '/terms', '/dpa', '/accessibility',
  '/blog/homezai-partners-with-san-diego-mls-sdmls/',
  '/blog/inman-news-uncomfortable-and-tense-cmls-attendees-push-back-on-reffkin-pitch/']
test('unchanged URLs and unrelated fragments never redirect', () => {
  for (const pathname of retained) {
    assert.equal(legacyRedirectFor({ pathname }), null)
    assert.equal(legacyRedirectFor({ pathname, hash: '#features' }), null)
  }
  assert.equal(legacyRedirectFor({ pathname: '/about', hash: '#demo' }), null)
  assert.equal(legacyRedirectFor({ pathname: '/pricing', hash: '#benefits' }), null)
})
test('legacy redirects retain query parameters without sending them to another origin', () => {
  assert.equal(legacyRedirectFor({ pathname: '/', search: '?utm_source=legacy', hash: '#benefits' }), '/pricing?utm_source=legacy#features')
  assert.equal(legacyRedirectFor({ pathname: '/pricing/', search: '?utm_source=legacy', hash: '#quote-form' }), '/contact?utm_source=legacy')
})

test('the emitted blog index immediately redirects without JavaScript and declares News canonical', { skip: !existsSync(new URL('../dist/index.html', import.meta.url)) && 'no build in dist/' }, () => {
  const html = readFileSync(new URL('../dist/blog/index.html', import.meta.url), 'utf8')
  assert.match(html, /<meta http-equiv="refresh" content="0; url=\/news\/">/)
  assert.match(html, /<link rel="canonical" href="https:\/\/homezai\.com\/news\/">/)
  assert.doesNotMatch(html, /<script/)
  const sitemap = readFileSync(new URL('../dist/sitemap.xml', import.meta.url), 'utf8')
  assert.doesNotMatch(sitemap, /<loc>https:\/\/homezai\.com\/blog\/<\/loc>/)
})
