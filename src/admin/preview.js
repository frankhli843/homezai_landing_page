/*
 * Wires the article preview into the editor.
 *
 * The markup and the rules live in previewTemplate.js, which has no browser and no
 * stylesheet in it so it can be tested directly. This file is the only part that knows
 * about window.CMS and about src/App.css, and it is the entry point the build bundles
 * into public/admin/preview.js.
 *
 * The stylesheet is the real one, imported as text, not a hand copied subset. A copy
 * drifts the first time somebody edits the article styles, and a preview that has
 * drifted is worse than no preview because it is believed.
 */

import siteStyles from '../App.css?raw'
import {
  PREVIEW_CHROME_CSS,
  MEDIA_PREFIX,
  assetSource,
  buildPreviewHtml,
  collectFields,
  loadCachedThumbnail,
  makeElementFactory,
  resolveHeroSource,
  waitForAssetSource,
} from './previewTemplate.js'

/** The private repository the editor reads, used only to find a cached thumbnail. */
const CONTENT_REPO = 'frankhli843/homezai-content'

/**
 * Register the preview with the editor.
 *
 * Exported rather than run inline so that a failure to register is reported once, and
 * so the module can be imported without a CMS present.
 */
export function registerArticlePreview(cms, { repo = CONTENT_REPO, styles = siteStyles } = {}) {
  if (!cms || typeof cms.registerPreviewTemplate !== 'function') return false

  try {
    cms.registerPreviewStyle(styles, { raw: true })
    cms.registerPreviewStyle(PREVIEW_CHROME_CSS, { raw: true })
  } catch (error) {
    console.warn('The article preview styles could not be registered.', error)
  }

  // A hero saved into the private repository but never published has no public URL, so
  // its thumbnail is fetched from the editor's own cache once per path.
  const thumbnails = new Map()

  // Images already saved in the repository that the editor was still fetching when the
  // pane was drawn, keyed by the reference the article uses. Each one is waited for
  // once and its address remembered, so the pane is corrected in place when the bytes
  // arrive and every later draw uses them directly.
  const fetched = new Map()
  const swapHero = (props, url) => {
    const doc = props.document
    const hero = doc && doc.querySelector('.article-hero img')
    if (hero) hero.src = url
    const share = doc && doc.querySelector('.preview-share-card img')
    if (share) share.src = url
  }
  const whenFetched = (reference, asset, apply) => {
    if (fetched.has(reference)) return
    fetched.set(reference, '')
    waitForAssetSource(asset).then((url) => {
      if (!url) return
      fetched.set(reference, url)
      apply(url)
      // Again once the pane has certainly been drawn, for an answer that arrived first.
      setTimeout(() => apply(url), 500)
    })
  }
  const getAsset = (props, reference) => {
    let decoded = reference
    try {
      decoded = decodeURIComponent(reference.replace(/&amp;/g, '&'))
    } catch {
      /* keep it as written */
    }
    for (const candidate of new Set([decoded, reference])) {
      try {
        const asset = props.getAsset(candidate)
        if (asset) return asset
      } catch {
        /* try the next spelling */
      }
    }
    return undefined
  }

  cms.registerPreviewTemplate('posts', (props) => {
    const element = makeElementFactory(
      props && typeof props.widgetFor === 'function' ? props.widgetFor('body') : null,
    )
    if (!element) return null

    const fields = collectFields(props.entry)
    const path = fields.heroPath
    const mediaPath =
      typeof path === 'string' && path.startsWith(MEDIA_PREFIX)
        ? `content/media/${path.slice(MEDIA_PREFIX.length)}`
        : ''

    let asset
    try {
      asset = path ? props.getAsset(path) : undefined
    } catch {
      asset = undefined
    }

    if (repo && mediaPath && !thumbnails.has(mediaPath)) {
      thumbnails.set(mediaPath, '')
      loadCachedThumbnail(repo, mediaPath).then((url) => {
        if (!url) return
        thumbnails.set(mediaPath, url)
        // Swap it in where it already rendered, so the pane does not depend on the
        // editor choosing to re-run the template.
        swapHero(props, url)
      })
    }

    const heroSrc = resolveHeroSource(asset, path, fetched.get(path) || thumbnails.get(mediaPath) || '')
    if (asset && path && !assetSource(asset)) {
      whenFetched(path, asset, (url) => swapHero(props, url))
    }

    let html
    try {
      html = buildPreviewHtml({ ...fields, heroSrc, bodyImageSources: fetched })
      for (const [, reference] of html.matchAll(/data-media-ref="([^"]*)"/g)) {
        if (fetched.get(reference)) continue
        const bodyAsset = getAsset(props, reference)
        if (!bodyAsset) continue
        whenFetched(reference, bodyAsset, (url) => {
          const doc = props.document
          for (const img of doc ? doc.querySelectorAll('img[data-media-ref]') : []) {
            if (img.getAttribute('data-media-ref') === reference.replace(/&amp;/g, '&')) img.src = url
          }
        })
      }
    } catch (error) {
      console.warn('The article preview could not be built.', error)
      html =
        '<p style="font-family:Inter,sans-serif;padding:24px;color:#B91C1C">' +
        'The preview could not be drawn. Your article is not affected. Reload the editor, ' +
        'and tell Frank if it keeps happening.</p>'
    }

    return element('div', { dangerouslySetInnerHTML: { __html: html } })
  })

  return true
}

/* The editor bundle publishes window.CMS when it loads, which may be after this runs. */
if (typeof window !== 'undefined') {
  const start = Date.now()
  const attempt = () => {
    if (window.CMS && typeof window.CMS.registerPreviewTemplate === 'function') {
      registerArticlePreview(window.CMS)
      return
    }
    if (Date.now() - start > 20000) {
      console.warn('The article preview could not be registered: the editor never appeared.')
      return
    }
    setTimeout(attempt, 100)
  }
  attempt()
}
