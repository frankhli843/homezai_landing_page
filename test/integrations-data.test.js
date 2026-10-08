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
const appCssFile = path.join(repoRoot, 'src', 'App.css')

const CINCYMLS_LOGO = '/images/integrations/cincymls.png'
const HAR_LOGO = '/images/integrations/houston-association-of-realtors.png'
const COCONUT_COAST_LOGO = '/images/integrations/coconut-coast-organization-of-realtors.png'
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

const HAR_LOGO_SHA256 =
  '536755d20d627246698708b597f6a91a7a55da6f44538334ba1d53ab86f0295e'
const COCONUT_COAST_LOGO_SHA256 =
  'c4e3628345142d32e1c8044da6f287a5758f9150fa731d9e29aed87bdddd639e'

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
 * The exact organizations Brian Schoedel asked for, in rendered order.
 *
 * The September requests established Cincinnati, Florida, Alabama and San
 * Diego. The 2026-10-08 request keeps Cincinnati first, adds HAR beside it, and
 * updates Coconut Coast's public location and current logo treatment.
 *
 * Every entry here is a claim about what somebody actually asked for. Adding a
 * row because an integration exists, rather than because it was requested,
 * would quietly turn this guard into a mirror of the data it is guarding.
 */
const REQUIRED_MLS = [
  { name: 'MLS of Greater Cincinnati (CincyMLS)', desc: 'Cincinnati, Ohio', logo: CINCYMLS_LOGO },
  {
    name: 'Houston Association of REALTORS® (HAR)',
    desc: 'Houston, Texas',
    logo: HAR_LOGO,
  },
  {
    name: 'Coconut Coast Organization of REALTORS®',
    desc: 'Bonita Springs, Florida',
    logo: COCONUT_COAST_LOGO,
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

const PRIMARY_SOURCE_LOGOS_OCT_8 = [
  { logo: HAR_LOGO, alt: /houston association of realtors/i, width: 300, height: 300,
    sha256: HAR_LOGO_SHA256 },
  { logo: COCONUT_COAST_LOGO, alt: /coconut coast organization of realtors/i, width: 400, height: 144,
    sha256: COCONUT_COAST_LOGO_SHA256 },
]

/*
 * Brian's second 2026-10-02 request reshaped the rest of the page: roster
 * feeds gained two cards and real logos, every card he listed for removal
 * went, Google Calendar got its logo, and Facebook, Instagram and LinkedIn
 * moved into a new Social Media category. Removing those cards left CRM,
 * Leads and Design Apps with nothing in them, so those headings go too rather
 * than rendering as empty "0 integrations available" sections.
 */
const CALENDARS_CATEGORY = 'Calendars'
const ROSTER_CATEGORY = 'User Roster Feeds'
const SOCIAL_CATEGORY = 'Social Media'

const EXPECTED_CATEGORY_ORDER = [
  MLS_CATEGORY,
  MLS_SYSTEMS_CATEGORY,
  CALENDARS_CATEGORY,
  ROSTER_CATEGORY,
  SOCIAL_CATEGORY,
]

const EXP_LOGO = '/images/integrations/exp-realty.png'
const BHHS_LOGO = '/images/integrations/berkshire-hathaway-homeservices.png'
const WEICHERT_LOGO = '/images/integrations/weichert-realtors.png'
const BOLDTRAIL_LOGO = '/images/integrations/boldtrail.png'
const REMAX_LOGO = '/images/integrations/remax.png'
const GOOGLE_CALENDAR_LOGO = '/images/integrations/google-calendar.png'
const FACEBOOK_LOGO = '/images/integrations/facebook.png'
const INSTAGRAM_LOGO = '/images/integrations/instagram.png'
const LINKEDIN_LOGO = '/images/integrations/linkedin.png'

const ROSTER_DESC = 'Agent roster synchronization'

// In the order Brian listed them. RE/MAX came on 2026-10-05 and joins the
// brokerages, ahead of the BoldTrail platform card.
const REQUIRED_ROSTER_FEEDS = [
  { name: 'eXp Realty (BoldTrail)', desc: ROSTER_DESC, logo: EXP_LOGO },
  { name: 'Berkshire Hathaway HomeServices (BoldTrail)', desc: ROSTER_DESC, logo: BHHS_LOGO },
  { name: 'Weichert Realtors (BoldTrail)', desc: ROSTER_DESC, logo: WEICHERT_LOGO },
  { name: 'RE/MAX (BoldTrail)', desc: 'MAX/CENTER Agent roster synchronization', logo: REMAX_LOGO },
  { name: 'BoldTrail (Inside Real Estate)', desc: ROSTER_DESC, logo: BOLDTRAIL_LOGO },
]

const REQUIRED_CALENDARS = [
  { name: 'Google Calendar', desc: 'Sync appointments with Google Calendar', logo: GOOGLE_CALENDAR_LOGO },
]

const SOCIAL_DESC = 'Embed your booking page into social posts'

const REQUIRED_SOCIAL = [
  { name: 'Facebook (Meta)', desc: SOCIAL_DESC, logo: FACEBOOK_LOGO },
  { name: 'Instagram (Meta)', desc: SOCIAL_DESC, logo: INSTAGRAM_LOGO },
  { name: 'LinkedIn (Microsoft)', desc: SOCIAL_DESC, logo: LINKEDIN_LOGO },
]

// Every card Brian asked to take off the page, by the name it was published
// under. None of these may come back in any category.
const REMOVED_CARDS = [
  'BoldTrail by Inside Real Estate',
  'Apple Calendar',
  'Calendly',
  'Microsoft Outlook Calendar',
  'Homes.com',
  'Homezai',
  'LinkedIn',
  'Meta (Facebook, Instagram)',
  'Realtor.com',
  'TikTok',
  'Zillow',
  'Canva',
  'Maxa Designs',
]

const EMPTIED_CATEGORIES = [
  'Customer Relationship Management (CRM)',
  'Leads',
  'Design Apps',
]

/* Supplied 200x100 PNGs, white margin trimmed to a 2px pad, metadata dropped. */
const SUPPLIED_LOGOS_OCT_2 = [
  { logo: EXP_LOGO, alt: /exp realty/i, width: 159, height: 84,
    sha256: '3567596ae179c1f5f7eacd039bfbde40b3890f39fca536d46f8851fcb258467b' },
  { logo: BHHS_LOGO, alt: /berkshire hathaway homeservices/i, width: 184, height: 81,
    sha256: '100de742e0b098109190876967808c90d1fc7e6dca4b0c8a670a8ab2df54e805' },
  { logo: WEICHERT_LOGO, alt: /weichert/i, width: 84, height: 84,
    sha256: 'c0a35243c457ad562c15c69ea15322ed1a2f8052906f34bff221d3448fa96afa' },
  { logo: BOLDTRAIL_LOGO, alt: /boldtrail/i, width: 111, height: 32,
    sha256: '9cefe733d154aae33d286e7c4a5041e14375966d1051ef50edc90403c68c7f75' },
  { logo: GOOGLE_CALENDAR_LOGO, alt: /google calendar/i, width: 84, height: 84,
    sha256: 'f706e28b26abd0c1262c5c469d924b33d7bc9c4d8ff51f0679e2ed8d863125a6' },
  { logo: FACEBOOK_LOGO, alt: /facebook/i, width: 84, height: 84,
    sha256: '677f2810ccf65e4279322843bd545394a8e045eb2131835d38676271f1a07c34' },
  { logo: INSTAGRAM_LOGO, alt: /instagram/i, width: 84, height: 84,
    sha256: '1efce6c38cff0e262b63ab0a03c61ed0b1b1f0f51a096b4780ae1b60fced9def' },
  { logo: LINKEDIN_LOGO, alt: /linkedin/i, width: 84, height: 84,
    sha256: '1e63bc396f3ac53962be655705ac158a294cb026e28a32f36818ac06b9ca5efe' },
]

/*
 * Brian's 2026-10-05 RE/MAX artwork, a 200x100 PNG (sha256 6260aba3...eaef4).
 * Same trim as above, except that a band of 253-254 pixels under the wordmark,
 * invisible on white, is treated as margin too. Cut at exact white it would
 * leave the mark in the top half of a 146x59 file, small and high in the frame.
 */
const SUPPLIED_LOGOS_OCT_5 = [
  { logo: REMAX_LOGO, alt: /re\/max/i, width: 145, height: 32,
    sha256: '85dd7b8b0caf4b5e0bcb0391de2a0c870da59b4696449e14d0fdbfeee75c3771' },
]

function categoryItems(name) {
  const matches = integrationCategories.filter((c) => c.name === name)
  assert.equal(matches.length, 1, `expected exactly one "${name}" category`)
  return matches[0].items
}

function assertCards(category, expected) {
  const items = categoryItems(category)
  assert.deepEqual(
    items.map((i) => i.name),
    expected.map((i) => i.name),
    `"${category}" cards`,
  )
  expected.forEach((want, i) => {
    assert.equal(items[i].desc, want.desc, `wrong description for "${want.name}"`)
    assert.equal(items[i].logo, want.logo, `wrong logo binding for "${want.name}"`)
  })
}

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
  for (const stale of [/SWFL/i, /Southwest Florida MLS/i, /Bonita-Estero/i, /^Formerly /im]) {
    assert.equal(stale.test(haystack), false, `stale label ${stale} is present in the data`)
  }

  const coconut = mlsItems().find((i) => i.name === 'Coconut Coast Organization of REALTORS®')
  assert.ok(coconut, 'the Coconut Coast card is missing')
  assert.equal(coconut.desc, 'Bonita Springs, Florida')
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
  const cincy = mlsItems().find((i) => i.name === 'MLS of Greater Cincinnati (CincyMLS)')
  assert.ok(cincy, 'the CincyMLS card is missing')
  assert.equal(cincy.desc, 'Cincinnati, Ohio')
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

test('HAR is a single Houston MLS card with a local logo', () => {
  const harCards = mlsItems().filter((i) => /houston|har\b/i.test(`${i.name} ${i.desc}`))
  assert.equal(harCards.length, 1, `expected one HAR/Houston card, got ${JSON.stringify(harCards)}`)
  const har = harCards[0]
  assert.equal(har.name, 'Houston Association of REALTORS® (HAR)')
  assert.equal(har.desc, 'Houston, Texas')
  assert.equal(har.logo, HAR_LOGO)
  assert.match(har.logoAlt, /houston association of realtors/i)
})

test('MLS cards have stable local identifiers and no malformed public copy', () => {
  const logoIds = new Set()
  const publicText = mlsItems().map((i) => `${i.name}\n${i.desc}`).join('\n')
  assert.doesNotMatch(publicText, /Brian|Frank|approval|Bridge status|task_|t_01/i)
  for (const item of mlsItems()) {
    assert.ok(item.logo, `"${item.name}" needs a local logo`)
    assert.match(
      item.logo,
      /^\/images\/integrations\/[a-z0-9-]+\.(png|jpg)$/,
      `"${item.name}" logo path is not a stable public asset path`,
    )
    const id = item.logo.replace(/^\/images\/integrations\//, '').replace(/\.(png|jpg)$/, '')
    assert.equal(logoIds.has(id), false, `duplicate integration identifier "${id}"`)
    logoIds.add(id)
    assert.ok(item.logoAlt && item.logoAlt.trim().length > 0, `"${item.name}" needs logo alt text`)
  }
})

test('the October 2026 primary-source logos are local, pinned, and screen-reader described', () => {
  const byLogo = new Map(allItems().filter((i) => i.logo).map((i) => [i.logo, i]))
  for (const expected of PRIMARY_SOURCE_LOGOS_OCT_8) {
    const item = byLogo.get(expected.logo)
    assert.ok(item, `no card is bound to ${expected.logo}`)
    assert.ok(item.logoAlt && item.logoAlt.trim().length > 0, `"${item.name}" needs alt text`)
    assert.match(item.logoAlt, expected.alt, `unhelpful alt text for "${item.name}": ${item.logoAlt}`)

    const onDisk = path.join(publicDir, expected.logo.replace(/^\//, ''))
    assert.ok(existsSync(onDisk), `missing committed asset: ${onDisk}`)
    assert.deepEqual(pngSize(onDisk), { width: expected.width, height: expected.height })
    assert.equal(sha256(onDisk), expected.sha256, `${expected.logo} is not the verified local artwork`)
  }
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

test('the integration card CSS keeps logo frames and responsive grids stable', () => {
  const css = readFileSync(appCssFile, 'utf8')
  assert.match(
    css,
    /\.integration-logo-frame\s*{[\s\S]*width:\s*112px;[\s\S]*height:\s*68px;/,
    'integration logo frame must keep fixed dimensions',
  )
  assert.match(
    css,
    /\.integration-logo-frame img\s*{[\s\S]*object-fit:\s*contain;/,
    'integration logos must use contain to avoid brand distortion',
  )
  assert.match(
    css,
    /@media \(max-width: 1024px\)\s*{[\s\S]*\.integration-cards\s*{[\s\S]*grid-template-columns:\s*repeat\(2, 1fr\);/,
    'tablet layout must render integration cards in two columns',
  )
  assert.match(
    css,
    /@media \(max-width: 768px\)\s*{[\s\S]*\.integration-cards\s*{[\s\S]*grid-template-columns:\s*1fr;/,
    'phone layout must render integration cards in one column',
  )
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

test('the categories render in the requested order, each exactly once', () => {
  assert.deepEqual(integrationCategories.map((c) => c.name), EXPECTED_CATEGORY_ORDER)
})

test('no category is left empty', () => {
  for (const cat of integrationCategories) {
    assert.ok(cat.items.length > 0, `"${cat.name}" has no cards and would render as an empty section`)
  }
})

test('categories emptied by the removals are gone, not rendered empty', () => {
  const names = new Set(integrationCategories.map((c) => c.name))
  for (const gone of EMPTIED_CATEGORIES) {
    assert.equal(names.has(gone), false, `"${gone}" should no longer be a category`)
  }
})

test('User Roster Feeds lists the five requested BoldTrail feeds with logos, in order', () => {
  assertCards(ROSTER_CATEGORY, REQUIRED_ROSTER_FEEDS)
})

test('Calendars keeps only Google Calendar, now with its logo', () => {
  assertCards(CALENDARS_CATEGORY, REQUIRED_CALENDARS)
})

test('Social Media is the last category and holds exactly Facebook, Instagram and LinkedIn', () => {
  assert.equal(integrationCategories.at(-1).name, SOCIAL_CATEGORY)
  assertCards(SOCIAL_CATEGORY, REQUIRED_SOCIAL)
})

test('every card Brian asked to remove is absent from every category', () => {
  const names = new Set(allItems().map((i) => i.name))
  for (const removed of REMOVED_CARDS) {
    assert.equal(names.has(removed), false, `"${removed}" was asked to be removed but is still listed`)
  }
})

test('the social networks appear once, only in Social Media', () => {
  for (const cat of integrationCategories) {
    if (cat.name === SOCIAL_CATEGORY) continue
    for (const item of cat.items) {
      assert.doesNotMatch(
        item.name,
        /facebook|instagram|linkedin|\bmeta\b|tiktok/i,
        `"${item.name}" in "${cat.name}" duplicates or contradicts the Social Media category`,
      )
    }
  }
})

test('BoldTrail itself is listed once, as a roster feed', () => {
  const standalone = allItems().filter((i) => /^boldtrail\b/i.test(i.name))
  assert.deepEqual(standalone.map((i) => i.name), ['BoldTrail (Inside Real Estate)'])
})

test('every card on the page now carries a logo', () => {
  for (const item of allItems()) {
    assert.ok(item.logo, `"${item.name}" has no logo and would render as a wordmark`)
  }
})

test('every logo supplied on 2026-10-02 and 2026-10-05 is committed, pinned, and described', () => {
  const byLogo = new Map(allItems().filter((i) => i.logo).map((i) => [i.logo, i]))
  const bound = allItems().filter((i) => i.logo).map((i) => i.logo)
  assert.equal(new Set(bound).size, bound.length, 'two cards share one logo file')
  for (const expected of [...SUPPLIED_LOGOS_OCT_2, ...SUPPLIED_LOGOS_OCT_5]) {
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

test('the built Integrations page matches the data: headings, counts, cards and logos', { skip: !existsSync(builtIntegrations) && 'no build in dist/' }, () => {
  const html = decodeEntities(readFileSync(builtIntegrations, 'utf8')).replace(/<!-- -->/g, '')
  const list = html.slice(html.indexOf('class="integrations-list"'), html.indexOf('class="integrations-cta"'))
  assert.ok(list.length > 0, 'no integrations list in the built page')

  const sections = list.split('<div class="integration-category">').slice(1)
  assert.deepEqual(
    sections.map((s) => s.match(/<h2>([^<]+)<\/h2>/)?.[1]),
    EXPECTED_CATEGORY_ORDER,
    'built category headings',
  )

  sections.forEach((section, i) => {
    const cat = integrationCategories[i]
    const cards = [...section.matchAll(
      /<div class="integration-card">([\s\S]*?)<h3>([^<]+)<\/h3><p>([^<]+)<\/p>/g,
    )].map((m) => ({ head: m[1], name: m[2], desc: m[3] }))
    const count = section.match(/class="category-count">(\d+) integrations? available</)
    assert.ok(count, `"${cat.name}" has no count label`)
    assert.equal(Number(count[1]), cards.length, `"${cat.name}" count label disagrees with its rendered cards`)
    assert.deepEqual(cards.map((c) => c.name), cat.items.map((it) => it.name), `"${cat.name}" rendered cards`)
    cards.forEach((card, j) => {
      const item = cat.items[j]
      assert.equal(card.desc, item.desc)
      const img = card.head.match(/<img src="([^"]+)" alt="([^"]*)"/)
      assert.ok(img, `"${card.name}" renders no logo image`)
      assert.equal(img[1], item.logo)
      assert.equal(img[2], item.logoAlt)
      assert.doesNotMatch(card.head, /integration-wordmark/, `"${card.name}" fell back to a wordmark`)
    })
  })

  for (const removed of REMOVED_CARDS) {
    assert.equal(list.includes(`<h3>${removed}</h3>`), false, `the built page still lists "${removed}"`)
  }

  const roster = sections[EXPECTED_CATEGORY_ORDER.indexOf(ROSTER_CATEGORY)]
  assert.match(roster, /class="category-count">5 integrations available</, 'User Roster Feeds count label')
  assert.match(roster, /<h3>RE\/MAX \(BoldTrail\)<\/h3><p>MAX\/CENTER Agent roster synchronization<\/p>/)
})

test('every card has a non-empty name and description and no duplicate names', () => {
  const names = allItems().map((i) => i.name)
  assert.equal(new Set(names).size, names.length, 'duplicate integration names present')
  for (const item of allItems()) {
    assert.ok(item.name && item.name.trim().length > 0)
    assert.ok(item.desc && item.desc.trim().length > 0, `"${item.name}" has no description`)
  }
})
