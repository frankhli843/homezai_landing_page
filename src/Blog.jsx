/*
 * The article page and the not found page.
 *
 * Articles are listed on /news (src/site/pages/NewsPage.jsx) and keep their published
 * addresses at /blog/<slug>/.
 *
 * Everything these components render was generated at build time by
 * scripts/build-content.mjs from the markdown in content/posts. Only published
 * articles are ever written into that module, so a draft has no route to here at all;
 * there is no runtime fetch, no API and therefore nothing to filter at request time.
 *
 * bodyHtml is set with dangerouslySetInnerHTML on purpose, and the name is a fair
 * warning. It is safe here for one specific reason: the string was produced by
 * src/content/markdown.js with raw HTML disabled, so it cannot contain an element the
 * author wrote. test/markdown-rendering.test.js is what keeps that true.
 */

import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { posts } from './generated/content.js'
import { trackEvent } from './analytics'
import { SITE_NAME, metaForRoute } from './content/seo.js'
import { formatPublishedDate } from './content/formatDate.js'
import { articleTags } from './site/articleTags.js'

const BASE = import.meta.env.BASE_URL

/** A site relative asset path, honouring the Vite base the rest of the app uses. */
function asset(path) {
  return `${BASE}${String(path || '').replace(/^\//, '')}`
}

/**
 * Apply head metadata after a client side navigation.
 *
 * The prerendered file already carries all of this, which is what a crawler reads.
 * This exists so that the tab title and the canonical stay correct when a reader moves
 * between articles without a page load.
 */
function useDocumentMeta(path, context) {
  useEffect(() => {
    const meta = metaForRoute(path, context)
    document.title = meta.title
    const set = (selector, attribute, value) => {
      const node = document.head.querySelector(selector)
      if (node) node.setAttribute(attribute, value)
    }
    set('link[rel="canonical"]', 'href', meta.canonical)
    set('meta[name="description"]', 'content', meta.description)
    set('meta[property="og:title"]', 'content', meta.title)
    set('meta[property="og:description"]', 'content', meta.description)
    set('meta[property="og:url"]', 'content', meta.canonical)
    set('meta[property="og:image"]', 'content', meta.image)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path, context?.post?.slug])
}

export function ArticlePage() {
  const { slug } = useParams()
  const post = posts.find((entry) => entry.slug === slug)

  useDocumentMeta(post ? `/blog/${post.slug}/` : '/404/', post ? { post } : {})
  useEffect(() => {
    document.title = post ? `${post.seoTitle || post.title} | ${SITE_NAME}` : `Page not found | ${SITE_NAME}`
    if (post) {
      trackEvent('blog_article_view', { slug: post.slug, page_path: `/blog/${post.slug}/` })
    } else {
      // A reader reaching an article route that has no article is worth seeing, because
      // it is what an unpublish or a slug change without a redirect looks like from the
      // outside. The slug is the article address, not anything about the reader.
      trackEvent('blog_article_missing', { slug: slug || '', page_path: `/blog/${slug || ''}/` })
    }
  }, [post, slug])

  if (!post) return <NotFoundPage />

  const tags = articleTags(post).slice(0, 8)

  /*
   * The class names here are the ones src/admin/previewTemplate.js renders, and App.css
   * styles both, so the editor preview shows an article exactly as a reader will.
   */
  return (
    <main className="blog-page" id="main-content" tabIndex="-1">
      <article className="article">
        <header className="article-header">
          <div className="article-container">
            <p className="article-back">
              <Link to="/news">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m12 19-7-7 7-7" />
                  <path d="M19 12H5" />
                </svg>
                Back to News
              </Link>
            </p>
            <p className="article-eyebrow">News</p>
            <h1>{post.title}</h1>
            <p className="article-meta">
              <span>{post.author}</span>
              <span aria-hidden="true"> &middot; </span>
              <time dateTime={post.publishedAt}>{formatPublishedDate(post.publishedAt)}</time>
              <span aria-hidden="true"> &middot; </span>
              <span>{post.readingMinutes} min read</span>
            </p>
            {tags.length > 0 ? (
              <ul className="article-tags" aria-label="Article tags">
                {tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </header>

        <figure className="article-hero">
          <img
            src={asset(post.heroImage)}
            alt={post.heroImageAlt}
            width={post.heroImageWidth || 1600}
            height={post.heroImageHeight || 900}
            decoding="async"
          />
        </figure>

        <div className="article-container">
          <div className="article-body" dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />

          {post.updatedAt && post.updatedAt !== post.publishedAt ? (
            <p className="article-updated">
              Updated <time dateTime={post.updatedAt}>{formatPublishedDate(post.updatedAt)}</time>
            </p>
          ) : null}

          <nav className="article-footer-nav" aria-label="More from Homezai">
            <Link to="/news" className="article-button article-button-outline">
              Back to News
            </Link>
            <Link to="/try-now" className="article-button article-button-primary">
              TRY NOW
            </Link>
          </nav>
        </div>
      </article>
    </main>
  )
}

/**
 * A real not found page. The site used to answer an unknown deep link with a redirect
 * shim that repainted some other route; a reader saw something plausible and a crawler
 * saw HTTP 404 for a URL that was supposed to exist. Now the URLs that exist are files
 * that return 200, and this is what genuinely does not exist.
 */
export function NotFoundPage() {
  useEffect(() => {
    document.title = `Page not found | ${SITE_NAME}`
  }, [])
  return (
    <main className="blog-page" id="main-content" tabIndex="-1">
      <div className="article-container not-found">
        <p className="article-eyebrow">404</p>
        <h1>Page not found</h1>
        <p>That address does not exist on homezai.com. It may have moved, or the link may be incomplete.</p>
        <div className="article-footer-nav">
          <Link to="/" className="article-button article-button-primary">
            Go to the home page
          </Link>
          <Link to="/news" className="article-button article-button-outline">
            Read the news
          </Link>
        </div>
      </div>
    </main>
  )
}
