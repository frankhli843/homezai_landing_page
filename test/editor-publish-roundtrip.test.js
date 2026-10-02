import { test, describe } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

import { load as yamlLoad } from 'js-yaml'

import { buildPreviewHtml, publishedMediaUrl, resolveHeroSource, waitForAssetSource } from '../src/admin/previewTemplate.js'
import { parsePostFile } from '../src/content/postFile.js'
import { validatePost } from '../src/content/postSchema.js'
import { planPublishSync } from '../src/content/publishPlan.js'

/**
 * What the editor writes has to be what the publish step accepts, and what the preview
 * shows has to be what the published page will load.
 *
 * On 2026-10-01 a press mention was saved from the editor as Published four times and
 * never reached homezai.com. Every publish run refused it with "publishedAt must be an
 * ISO 8601 instant in UTC", because the date fields were configured with a date-fns
 * style format string and the editor formats with Day.js tokens: `yyyy` is not a Day.js
 * token, `dd` is the weekday, `X` is literal, so the article carried
 * `publishedAt: yyyy-10-Th'T'22:55:00.000X`. Every synthetic article ever used to test
 * the editor left the date empty and let the publish step stamp it, which is the only
 * reason it was never seen. The publisher saw none of this: the preview said
 * "Published, this is live at ..." and drew the hero from a URL that could not exist.
 */

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const config = yamlLoad(readFileSync(join(root, 'public/admin/config.yml'), 'utf8'))
const posts = config.collections.find((collection) => collection.name === 'posts')
const dateFields = posts.fields.filter((field) => field.widget === 'datetime')

// Exactly what the editor wrote into frankhli843/homezai-content on 2026-10-01.
const WRITTEN_ON_2026_10_01 = ["yyyy-10-Th'T'22:55:00.000X", "yyyy-10-Th'T'17:55:00.000X"]

/*
 * What Sveltia 0.205.3 writes for a datetime field with picker_utc and no format, read
 * from its date-time helpers: the picker value goes through dayjs.utc(value).format(),
 * which in UTC mode is YYYY-MM-DDTHH:mm:ss followed by a literal Z. The staging run of
 * the real editor for this change wrote exactly this shape.
 */
const EDITOR_UTC_OUTPUT = '2026-10-02T12:00:00Z'

function postWith(overrides) {
  return {
    id: '00000000-0000-4000-8000-00000000000b',
    title: 'A press mention',
    slug: 'a-press-mention',
    excerpt: 'One or two sentences used on cards and as the social description.',
    status: 'published',
    author: 'Homezai Team',
    heroImage: '/blog-media/hero.webp',
    heroImageAlt: 'A hero image',
    body: 'Public body copy.\n',
    ...overrides,
  }
}

describe('the date the editor writes is a date the publish step accepts', () => {
  test('the article has both date fields, so these checks are not vacuous', () => {
    assert.deepEqual(dateFields.map((field) => field.name).sort(), ['publishedAt', 'updatedAt'])
  })

  for (const field of dateFields) {
    test(`${field.name} carries no format string the editor would read as Day.js tokens`, () => {
      // A format here is interpreted by Day.js inside the editor and nowhere else, so it
      // can only ever be checked by saving an article. Without one the editor writes ISO
      // 8601, which is the one shape the publish step and the site both read.
      for (const key of ['format', 'date_format', 'time_format']) {
        assert.equal(field[key], undefined, `${field.name}.${key} is ${JSON.stringify(field[key])}`)
      }
    })

    test(`${field.name} is picked in UTC, so the stored instant ends in Z`, () => {
      assert.equal(field.picker_utc, true)
    })
  }

  test('the shape the editor writes passes the publish step', () => {
    const post = postWith({ publishedAt: EDITOR_UTC_OUTPUT, updatedAt: EDITOR_UTC_OUTPUT })
    assert.deepEqual(validatePost(post).errors ?? [], [])
  })

  test('the values written on 2026-10-01 are still refused, and the refusal shows the value', () => {
    for (const value of WRITTEN_ON_2026_10_01) {
      const result = validatePost(postWith({ publishedAt: value }))
      const message = JSON.stringify(result.errors)
      assert.match(message, /publishedAt must be an ISO 8601 instant in UTC/)
      assert.ok(message.includes(value), `the refusal should quote ${value}: ${message}`)
    }
  })

  test('an article saved by the editor publishes end to end with the date it was given', () => {
    const file = {
      path: 'content/posts/a-press-mention.md',
      contents: `---
id: 00000000-0000-4000-8000-00000000000b
title: A press mention
slug: a-press-mention
excerpt: One or two sentences used on cards and as the social description.
status: published
author: Homezai Team
heroImage: /blog-media/Hero.webp
heroImageAlt: A hero image
publishedAt: ${EDITOR_UTC_OUTPUT}
updatedAt: ''
---

Public body copy.
`,
    }
    const WEBP = Buffer.from([0x52, 0x49, 0x46, 0x46, 0, 0, 0, 0, 0x57, 0x45, 0x42, 0x50, 1])
    const plan = planPublishSync({
      files: [file],
      media: [{ path: 'content/media/Hero.webp', bytes: WEBP }],
      now: '2026-10-02T13:00:00.000Z',
    })
    assert.deepEqual(plan.errors, [], JSON.stringify(plan.errors))
    const written = plan.writes.find((write) => write.path === 'content/posts/a-press-mention.md')
    const published = parsePostFile(written.contents, written.path)
    assert.equal(published.publishedAt, EDITOR_UTC_OUTPUT)
  })
})

/*
 * Every awkward name a real upload has arrived with, including both names Brian's
 * press mention used: curly quotes and a comma, then spaces and capitals.
 */
const NAMES = [
  ['Ninoska “Nina” Fabbri, Founder and CEO of Homezai.com.webp', 'ninoska-nina-fabbri-founder-and-ceo-of-homezai-com.webp'],
  [
    'Ninoska Nina Fabbri Founder CEO of Homezai.com mentioned in Inman News October 01 2026.webp',
    'ninoska-nina-fabbri-founder-ceo-of-homezai-com-mentioned-in-inman-news-october-01-2026.webp',
  ],
  ['My_Hero Image.PNG', 'my-hero-image.png'],
  ['Café Photo.JPEG', 'cafe-photo.jpg'],
  ['already-safe-hero.jpg', 'already-safe-hero.jpg'],
]

describe('the preview points at the address the publish step really writes', () => {
  const WEBP = Buffer.from([0x52, 0x49, 0x46, 0x46, 0, 0, 0, 0, 0x57, 0x45, 0x42, 0x50, 1])
  const PNG = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 1])
  const JPEG = Buffer.from([0xff, 0xd8, 0xff, 0xe0, 1])
  const bytesFor = (name) => (/\.webp$/i.test(name) ? WEBP : /\.png$/i.test(name) ? PNG : JPEG)

  for (const [uploaded, publishedName] of NAMES) {
    test(`${uploaded} previews at the URL its published copy lives at`, () => {
      const reference = `/blog-media/${uploaded}`
      const plan = planPublishSync({
        files: [
          {
            path: 'content/posts/names.md',
            contents: `---
id: 00000000-0000-4000-8000-00000000000c
title: Names
slug: names
excerpt: One or two sentences used on cards and as the social description.
status: published
author: Homezai Team
heroImage: ${JSON.stringify(reference)}
heroImageAlt: A hero image
publishedAt: 2026-10-01T22:55:00Z
---

Body.
`,
          },
        ],
        media: [{ path: `content/media/${uploaded}`, bytes: bytesFor(uploaded) }],
        now: '2026-10-02T13:00:00.000Z',
      })
      assert.deepEqual(plan.errors, [], JSON.stringify(plan.errors))
      assert.ok(plan.writes.some((write) => write.path === `public/blog-media/${publishedName}`))

      const expected = `https://homezai.com/blog-media/${publishedName}`
      assert.equal(publishedMediaUrl(reference), expected)
      // The editor writes spaces as %20 inside a markdown body, so the encoded form of
      // the same reference has to land on the same address.
      assert.equal(publishedMediaUrl(`/blog-media/${encodeURI(uploaded)}`), expected)
    })
  }

  test('anything that is not a single media file name is refused', () => {
    for (const bad of ['', '/blog-media/', '/blog-media/a/b.png', '/elsewhere/a.png', 'https://evil.example/a.png', '/blog-media/%E0%A4%A']) {
      assert.equal(publishedMediaUrl(bad), '', bad)
    }
  })
})

describe('a saved hero is shown from the editor copy, never from an address that does not exist', () => {
  const raw = '/blog-media/Ninoska “Nina” Fabbri, Founder and CEO of Homezai.com.webp'
  const published = 'https://homezai.com/blog-media/ninoska-nina-fabbri-founder-and-ceo-of-homezai-com.webp'

  /*
   * Sveltia's AssetProxy for an image already saved in the repository starts life with
   * url set to the public PATH under the name it was uploaded as, then replaces it with
   * a blob URL once it has fetched the bytes. The preview read it in between and drew
   * https://homezai.com/blog-media/<uploaded name>, which never exists: the publish
   * step writes the safe name, and on 2026-10-01 nothing had been published at all.
   */
  test('an asset whose url is still the uploaded path is not used as the picture', () => {
    const asset = { path: raw, url: raw }
    assert.notEqual(resolveHeroSource(asset, raw, ''), raw)
    assert.equal(resolveHeroSource(asset, raw, ''), published)
  })

  test('the last resort is the published address, not the uploaded name on the live site', () => {
    assert.equal(resolveHeroSource(undefined, raw, ''), published)
  })

  test('the editor copy replaces the guess as soon as the editor has fetched it', async () => {
    const asset = { path: raw, url: raw }
    setTimeout(() => {
      asset.url = 'blob:https://homezai.com/after-fetch'
    }, 30)
    assert.equal(await waitForAssetSource(asset, { timeoutMs: 1000, intervalMs: 5 }), 'blob:https://homezai.com/after-fetch')
  })

  test('an asset that never arrives gives up rather than polling forever', async () => {
    assert.equal(await waitForAssetSource({ url: raw }, { timeoutMs: 40, intervalMs: 5 }), '')
    assert.equal(await waitForAssetSource(undefined, { timeoutMs: 40, intervalMs: 5 }), '')
  })

  test('an image inside the article body previews at its published address too', () => {
    const html = buildPreviewHtml({
      title: 'T',
      body: `Before.\n\n![Quote card](/blog-media/${encodeURI('Ninoska “Nina” Fabbri, Founder and CEO of Homezai.com.webp')})\n`,
      status: 'published',
      heroSrc: '',
    })
    assert.match(html, new RegExp(`<img src="${published.replace(/[.]/g, '\\.')}"`))
    assert.match(html, /data-media-ref="\/blog-media\/Ninoska/)
    assert.doesNotMatch(html, /src="\/blog-media\//)
  })
})
