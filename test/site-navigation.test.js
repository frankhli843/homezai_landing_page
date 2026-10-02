import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import test from 'node:test'

/*
 * Frank, 2026-10-02 (email thread 1a0fc5c4691ce5ee): "Lets remove Blog from the
 * header but keep it on the footer as well". The blog stays reachable from every
 * page through the footer, and from each article's own "Blog" eyebrow link.
 */

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const appSource = readFileSync(path.join(repoRoot, 'src', 'App.jsx'), 'utf8')

function componentSource(name) {
  const start = appSource.indexOf(`function ${name}(`)
  assert.ok(start >= 0, `${name} is not defined in src/App.jsx`)
  const next = appSource.indexOf('\nfunction ', start + 1)
  return appSource.slice(start, next === -1 ? undefined : next)
}

const linkTargets = (source) => [...source.matchAll(/<Link to="([^"]+)"[^>]*>([^<]*)<\/Link>/g)].map((m) => ({ to: m[1], text: m[2].trim() }))

test('the header navigation does not link to the blog', () => {
  const links = linkTargets(componentSource('Navbar'))
  assert.ok(links.length >= 5, 'the header should still carry its other links')
  assert.deepEqual(
    links.filter(({ to, text }) => to.startsWith('/blog') || /^blog$/i.test(text)),
    [],
  )
})

test('the footer still links to the blog', () => {
  const links = linkTargets(componentSource('Footer'))
  assert.ok(
    links.some(({ to, text }) => to === '/blog/' && text === 'Blog'),
    'the footer must keep its Blog link to /blog/',
  )
})

/*
 * The prerendered pages are what visitors and crawlers receive before any script
 * runs, so the same rule is checked against the built HTML when a build exists.
 */
const builtHome = path.join(repoRoot, 'dist', 'index.html')
test('the built home page has Blog in the footer and not in the header', { skip: !existsSync(builtHome) && 'no build in dist/' }, () => {
  const html = readFileSync(builtHome, 'utf8')
  const nav = html.match(/<nav class="navbar">[\s\S]*?<\/nav>/)
  const footer = html.match(/<footer class="footer">[\s\S]*?<\/footer>/)
  assert.ok(nav && footer, 'the built page must contain the shared header and footer')
  assert.doesNotMatch(nav[0], /href="\/blog\/?"/)
  assert.match(footer[0], /<a href="\/blog\/"[^>]*>Blog<\/a>/)
})
