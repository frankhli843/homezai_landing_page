import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { existsSync, readFileSync, statSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import test from 'node:test'

import { integrationCategories } from '../src/integrationsData.js'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const publicDir = path.join(repoRoot, 'public')
const distDir = path.join(repoRoot, 'dist')

const CINCYMLS_LOGO = '/images/integrations/cincymls.png'
const SDMLS_LOGO = '/images/integrations/san-diego-mls.png'
const BRIDGE_LOGO = '/images/integrations/bridge-interactive.png'
const REALTYFEED_LOGO = '/images/integrations/realtyfeed.png'
const RAPATTONI_LOGO = '/images/integrations/rapattoni-mls.png'

/*
 * sha256 of the CincyMLS artwork exactly as Frank supplied it on 2026-09-04.
 * Pinning the digest, not just the path, is what catches a silent re-encode,
 * a resize, a recolour, or somebody swapping in a lookalike they found online.
 */
const CINCYMLS_LOGO_SHA256 =
  '550e8671bd3be15cd95628bf78bd7006dfb19374d24e16daee2cb9b0e1ebd902'

/* The supplied file's real pixel dimensions, read straight out of the PNG
 * IHDR chunk. The card frame relies on 595:336 being wider than it is tall. */
const CINCYMLS_LOGO_WIDTH = 595
const CINCYMLS_LOGO_HEIGHT = 336

function sha256(file) {
  return createHash('sha256').update(readFileSync(file)).digest('hex')
}

/* Minimal PNG header reader: bytes 16..24 of a PNG are the IHDR width and
 * height as big-endian uint32s. Avoids adding an image dependency to a repo
 * whose test command is a bare `node --test`. */
function pngSize(file) {
  const buf = readFileSync(file)
  assert.equal(
    buf.subarray(0, 8).toString('latin1'),
    '\x89PNG\r\n\x1a\n',
    `${file} is not a PNG`,
  )
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) }
}

const MLS_CATEGORY = 'Multiple Listing Service (MLS)'

function mlsItems() {
  const cat = integrationCategories.find((c) => c.name === MLS_CATEGORY)
  assert.ok(cat, `category "${MLS_CATEGORY}" is missing`)
  return cat.items
}

function allItems() {
  return integrationCategories.flatMap((c) => c.items)
}

/*
 * The exact organizations Brian Schoedel asked for, in request order.
 *
 * The first four are from the 2026-09-01 "Homezai website Integrations"
 * email: Ohio is one established integration (the brand plus its formal
 * description), Florida is the renamed Bonita-Estero board, and Alabama is two
 * separate organizations. San Diego is a SECOND request, made on 2026-09-22
 * alongside the Innovate Realty onboarding, and is listed last because this
 * array is also the rendered order.
 *
 * Every entry here is a claim about what somebody actually asked for. Adding a
 * row because an integration exists, rather than because it was requested,
 * would quietly turn this guard into a mirror of the data it is guarding.
 */
const REQUIRED_MLS = [
  { name: 'CincyMLS', desc: 'MLS of Greater Cincinnati', logo: CINCYMLS_LOGO },
  {
    name: 'Coconut Coast Organization of REALTORS®',
    desc: 'Formerly Bonita-Estero REALTORS®',
    logo: '/images/integrations/coconut-coast-organization-of-realtors.png',
  },
  {
    name: 'Baldwin County Association of REALTORS®',
    desc: 'Baldwin County, Alabama',
    logo: '/images/integrations/baldwin-county-association-of-realtors.png',
  },
  {
    name: 'Gulf Coast MLS - Mobile Area Association of REALTORS®',
    desc: 'Mobile area, Alabama',
    logo: '/images/integrations/gulf-coast-mls-mobile-area-association-of-realtors.jpg',
  },
  // Added 2026-09-22 on Brian's request for the Innovate Realty onboarding as
  // a text wordmark. Brian supplied the SDMLS artwork on 2026-10-02.
  { name: 'San Diego MLS (SDMLS)', desc: 'San Diego, California', logo: SDMLS_LOGO },
]

/*
 * Requested by Brian on 2026-10-02: a category for the systems and service
 * providers MLSs run on, placed directly below the MLS organizations. These
 * are vendors, not MLSs, so they must never be folded into the MLS list.
 * The coverage strings are exactly the labels he asked for.
 */
const MLS_SYSTEMS_CATEGORY = 'MLS Systems and Services'

const REQUIRED_MLS_SYSTEMS = [
  { name: 'Bridge Interactive', desc: 'USA and Canada', logo: BRIDGE_LOGO },
  { name: 'RealtyFeed', desc: 'USA and Canada', logo: REALTYFEED_LOGO },
  { name: 'Rapattoni MLS', desc: 'USA', logo: RAPATTONI_LOGO },
]

/*
 * Logos Brian supplied on 2026-10-02. Each committed file is the supplied
 * 200x100 PNG with only its plain white margin trimmed and its metadata
 * dropped; the artwork pixels themselves are unchanged. The digest pins the
 * exact committed bytes and the size pins the trimmed proportions, so a
 * re-encode, a resize or a lookalike swapped in from the web fails here.
 */
const SUPPLIED_LOGOS = [
  { logo: SDMLS_LOGO, alt: /san diego mls/i, width: 184, height: 30,
    sha256: '344e95de71cd6aa1abb26202b0dbe1b05122e50b568b1a14b28f293bd9f42272' },
  { logo: BRIDGE_LOGO, alt: /bridge interactive/i, width: 87, height: 32,
    sha256: 'e643d2374c089f496b67b6ba7e940f90c53b3e7ada6e736819d5351a59b7e495' },
  { logo: REALTYFEED_LOGO, alt: /realtyfeed/i, width: 184, height: 45,
    sha256: '1eaad40fac4d939c25c975bc32afb0cdd819b4c3715314399f3376c399e94901' },
  { logo: RAPATTONI_LOGO, alt: /rapattoni mls/i, width: 184, height: 36,
    sha256: '3272c3f7e2be6642ca71da5fe4a90346afa801411ee901f67e8d5a1bdc0eb4be' },
]

function systemsItems() {
  const matches = integrationCategories.filter((c) => c.name === MLS_SYSTEMS_CATEGORY)
  assert.equal(matches.length, 1, `expected exactly one "${MLS_SYSTEMS_CATEGORY}" category`)
  return matches[0].items
}

test('the MLS category lists exactly the requested organizations, in order', () => {
  assert.deepEqual(
    mlsItems().map((i) => i.name),
    REQUIRED_MLS.map((i) => i.name),
  )
})

test('each requested MLS card carries its expected description and logo binding', () => {
  const byName = new Map(mlsItems().map((i) => [i.name, i]))
  for (const expected of REQUIRED_MLS) {
    const actual = byName.get(expected.name)
    assert.ok(actual, `missing MLS card "${expected.name}"`)
    assert.equal(actual.desc, expected.desc, `wrong description for "${expected.name}"`)
    assert.equal(
      actual.logo ?? null,
      expected.logo,
      `wrong logo binding for "${expected.name}"`,
    )
  }
})

test('Cincinnati is one card, not a duplicate pair', () => {
  const cincinnatiish = mlsItems().filter((i) =>
    /cincy|cincinnati/i.test(`${i.name} ${i.desc}`),
  )
  assert.equal(
    cincinnatiish.length,
    1,
    `expected a single Cincinnati card, got ${JSON.stringify(cincinnatiish.map((i) => i.name))}`,
  )
})

test('Baldwin County and Gulf Coast stay two distinct cards', () => {
  const alabama = mlsItems().filter((i) => /baldwin|gulf coast/i.test(i.name))
  assert.equal(alabama.length, 2)
  assert.notEqual(alabama[0].name, alabama[1].name)
})

test('the stale Florida naming never comes back anywhere in the page data', () => {
  // "SWFL" and "Southwest Florida MLS" were never real names and must not
  // appear at all, in a card name or a description.
  const haystack = allItems().map((i) => `${i.name} ${i.desc}`).join('\n')
  for (const stale of [/SWFL/i, /Southwest Florida MLS/i]) {
    assert.equal(stale.test(haystack), false, `stale label ${stale} is present in the data`)
  }

  // Bonita-Estero is a real former name, so it is allowed to survive only as a
  // "Formerly ..." historical note. It must never be a card's own name, and
  // must never stand alone as a description the way the old SWFL card had it.
  for (const item of allItems()) {
    assert.equal(
      /bonita/i.test(item.name),
      false,
      `"${item.name}" still uses the retired Bonita-Estero name as its own name`,
    )
    if (/bonita/i.test(item.desc)) {
      assert.match(
        item.desc,
        /^Formerly /,
        `"${item.name}" mentions Bonita-Estero without marking it as a former name (got: ${item.desc})`,
      )
    }
  }
})

test('every referenced logo is a committed local asset that exists on disk', () => {
  const withLogos = allItems().filter((i) => i.logo)
  assert.ok(withLogos.length >= 4, 'expected at least the four supplied partner logos')
  for (const item of withLogos) {
    assert.ok(
      item.logo.startsWith('/images/integrations/'),
      `"${item.name}" logo must be served from our own /images/integrations/ directory, got ${item.logo}`,
    )
    assert.equal(
      /^https?:|googleusercontent|mail\.google/i.test(item.logo),
      false,
      `"${item.name}" logo must not hotlink a third party`,
    )
    const onDisk = path.join(publicDir, item.logo.replace(/^\//, ''))
    assert.ok(existsSync(onDisk), `logo file missing from public/: ${onDisk}`)
  }
})

/*
 * Frank supplied the CincyMLS artwork on 2026-09-04, after the first
 * Integrations delivery had already shipped Cincinnati as a text wordmark
 * because no logo existed yet. These four tests are the guard against that
 * temporary treatment coming back, against the file quietly disappearing,
 * against a mistyped path, and against the artwork being re-encoded into
 * something that is no longer the file he sent.
 */
test('the CincyMLS card is bound to our own committed logo, not a wordmark', () => {
  const cincy = mlsItems().find((i) => i.name === 'CincyMLS')
  assert.ok(cincy, 'the CincyMLS card is missing')
  assert.equal(cincy.desc, 'MLS of Greater Cincinnati')
  assert.equal(
    cincy.logo,
    CINCYMLS_LOGO,
    'CincyMLS must render the supplied logo; a null or renamed logo drops the card back to the text wordmark',
  )
  assert.ok(
    cincy.logoAlt && cincy.logoAlt.trim().length > 0,
    'CincyMLS needs alt text so the logo is announced to a screen reader',
  )
  assert.match(cincy.logoAlt, /cincymls/i, `unhelpful CincyMLS alt text: ${cincy.logoAlt}`)
})

test('the committed CincyMLS file is Frank\'s exact supplied artwork', () => {
  const onDisk = path.join(publicDir, CINCYMLS_LOGO.replace(/^\//, ''))
  assert.ok(existsSync(onDisk), `missing committed asset: ${onDisk}`)
  assert.ok(statSync(onDisk).size > 0, `committed asset is empty: ${onDisk}`)
  assert.equal(
    sha256(onDisk),
    CINCYMLS_LOGO_SHA256,
    'the committed CincyMLS PNG is not byte-identical to the artwork Frank supplied',
  )
})

test('the CincyMLS artwork keeps its supplied 595x336 proportions', () => {
  const onDisk = path.join(publicDir, CINCYMLS_LOGO.replace(/^\//, ''))
  assert.deepEqual(pngSize(onDisk), {
    width: CINCYMLS_LOGO_WIDTH,
    height: CINCYMLS_LOGO_HEIGHT,
  })
})

test('a production build carries every referenced logo, byte for byte', (t) => {
  if (!existsSync(distDir)) {
    t.skip('no dist/ present: run `npm run build` first. CI always builds before this runs.')
    return
  }
  const withLogos = allItems().filter((i) => i.logo)
  assert.ok(withLogos.length >= 4, 'expected at least the four supplied partner logos')
  assert.ok(
    withLogos.some((i) => i.logo === CINCYMLS_LOGO),
    'the CincyMLS logo is not referenced at all, so the build cannot contain it',
  )
  for (const item of withLogos) {
    const relative = item.logo.replace(/^\//, '')
    const built = path.join(distDir, relative)
    const source = path.join(publicDir, relative)
    assert.ok(existsSync(built), `the build omitted "${item.name}" logo: ${built}`)
    assert.ok(statSync(built).size > 0, `the built "${item.name}" logo is empty: ${built}`)
    assert.equal(
      sha256(built),
      sha256(source),
      `the built "${item.name}" logo differs from the committed source file`,
    )
  }
})

test('MLS Systems and Services sits directly after the MLS category', () => {
  const names = integrationCategories.map((c) => c.name)
  assert.equal(
    names.filter((n) => n === MLS_SYSTEMS_CATEGORY).length,
    1,
    `"${MLS_SYSTEMS_CATEGORY}" must appear exactly once`,
  )
  assert.equal(
    names.indexOf(MLS_SYSTEMS_CATEGORY),
    names.indexOf(MLS_CATEGORY) + 1,
    `"${MLS_SYSTEMS_CATEGORY}" must come immediately after "${MLS_CATEGORY}", got ${JSON.stringify(names)}`,
  )
})

test('MLS Systems and Services lists exactly the three requested providers, in order', () => {
  assert.deepEqual(
    systemsItems().map((i) => i.name),
    REQUIRED_MLS_SYSTEMS.map((i) => i.name),
  )
})

test('each MLS systems provider carries its requested coverage and logo binding', () => {
  const byName = new Map(systemsItems().map((i) => [i.name, i]))
  for (const expected of REQUIRED_MLS_SYSTEMS) {
    const actual = byName.get(expected.name)
    assert.ok(actual, `missing provider card "${expected.name}"`)
    assert.equal(actual.desc, expected.desc, `wrong coverage for "${expected.name}"`)
    assert.equal(actual.logo, expected.logo, `wrong logo binding for "${expected.name}"`)
  }
})

test('no MLS systems provider leaks into the MLS organizations list', () => {
  const mlsNames = new Set(mlsItems().map((i) => i.name))
  for (const provider of REQUIRED_MLS_SYSTEMS) {
    assert.equal(mlsNames.has(provider.name), false, `"${provider.name}" is a vendor, not an MLS`)
  }
})

test('every supplied 2026-10-02 logo is committed, pinned, and described for screen readers', () => {
  const byLogo = new Map(allItems().filter((i) => i.logo).map((i) => [i.logo, i]))
  for (const expected of SUPPLIED_LOGOS) {
    const item = byLogo.get(expected.logo)
    assert.ok(item, `no card is bound to ${expected.logo}`)
    assert.ok(item.logoAlt && item.logoAlt.trim().length > 0, `"${item.name}" needs alt text`)
    assert.match(item.logoAlt, expected.alt, `unhelpful alt text for "${item.name}": ${item.logoAlt}`)

    const onDisk = path.join(publicDir, expected.logo.replace(/^\//, ''))
    assert.ok(existsSync(onDisk), `missing committed asset: ${onDisk}`)
    assert.deepEqual(pngSize(onDisk), { width: expected.width, height: expected.height })
    assert.equal(sha256(onDisk), expected.sha256, `${expected.logo} is not the committed supplied artwork`)
  }
})

/*
 * The data tests above prove what the module says. This proves what the
 * prerendered page a visitor downloads says: the category headings in order,
 * the San Diego card showing its logo, and each provider card with its logo,
 * alt text and coverage, in order.
 */
const builtIntegrations = path.join(distDir, 'integrations', 'index.html')

function decodeEntities(html) {
  return html.replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"')
}

test('the built Integrations page renders the new category and cards', { skip: !existsSync(builtIntegrations) && 'no build in dist/' }, () => {
  const html = decodeEntities(readFileSync(builtIntegrations, 'utf8'))

  const headings = [...html.matchAll(/<h2>([^<]+)<\/h2>/g)].map((m) => m[1])
  const mlsAt = headings.indexOf(MLS_CATEGORY)
  assert.ok(mlsAt >= 0, `no "${MLS_CATEGORY}" heading in the built page`)
  assert.equal(headings[mlsAt + 1], MLS_SYSTEMS_CATEGORY, `built heading order: ${JSON.stringify(headings)}`)

  const cards = [...html.matchAll(
    /<div class="integration-card">([\s\S]*?)<h3>([^<]+)<\/h3><p>([^<]+)<\/p>/g,
  )].map((m) => ({ head: m[1], name: m[2], desc: m[3] }))

  const sdmls = cards.find((c) => c.name === 'San Diego MLS (SDMLS)')
  assert.ok(sdmls, 'the built page has no San Diego MLS card')
  assert.match(sdmls.head, /<img src="\/images\/integrations\/san-diego-mls\.png" alt="[^"]*San Diego MLS[^"]*"/)
  assert.doesNotMatch(sdmls.head, /integration-wordmark/, 'San Diego MLS still renders the text wordmark')

  const start = cards.findIndex((c) => c.name === REQUIRED_MLS_SYSTEMS[0].name)
  assert.ok(start >= 0, 'the built page has no MLS systems provider cards')
  REQUIRED_MLS_SYSTEMS.forEach((expected, i) => {
    const card = cards[start + i]
    assert.equal(card?.name, expected.name)
    assert.equal(card.desc, expected.desc)
    assert.match(card.head, new RegExp(`<img src="${expected.logo.replace(/\./g, '\\.')}" alt="[^"]+"`))
  })
})

test('every card has a non-empty name and description and no duplicate names', () => {
  const names = allItems().map((i) => i.name)
  assert.equal(new Set(names).size, names.length, 'duplicate integration names present')
  for (const item of allItems()) {
    assert.ok(item.name && item.name.trim().length > 0)
    assert.ok(item.desc && item.desc.trim().length > 0, `"${item.name}" has no description`)
  }
})
