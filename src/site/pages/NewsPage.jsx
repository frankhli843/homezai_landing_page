import { Link } from 'react-router-dom'

import { posts } from '../../generated/content.js'
import { formatPublishedDate } from '../../content/formatDate.js'
import { trackEvent } from '../../analytics'
import { articleTags } from '../articleTags.js'

/*
 * News lists the published articles from the content editor, newest first. The first
 * one is shown large; the rest use the side by side card from the design. Article
 * addresses stay at /blog/<slug>/ so links already shared and indexed keep working.
 */
function NewsCard({ post, featured }) {
  const path = `/blog/${post.slug}/`
  const tags = articleTags(post).slice(0, 3)
  const track = () => trackEvent('blog_card_click', { button_location: 'news_index', page_path: path })
  return (
    <Link
      to={path}
      onClick={track}
      className={featured
        ? 'group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg'
        : 'group grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg md:grid-cols-[0.42fr_0.58fr]'}
    >
      <img
        src={post.heroImage}
        alt={post.heroImageDecorative ? '' : post.heroImageAlt}
        width={post.heroImageWidth || 1600}
        height={post.heroImageHeight || 900}
        loading={featured ? undefined : 'lazy'}
        decoding="async"
        className={featured ? 'aspect-[1672/941] w-full object-cover' : 'h-full min-h-64 w-full object-cover'}
      />
      <div className="p-7 sm:p-9">
        {tags.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#0C3D8A]">{tag}</span>
            ))}
          </div>
        ) : null}
        <h3 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-[#0C3D8A] transition-colors group-hover:text-[#0F76EC] sm:text-3xl">{post.title}</h3>
        <p className="mt-4 leading-7 text-slate-600">{post.excerpt}</p>
        <p className="mt-6 text-sm font-semibold text-slate-500">
          {post.author} · <time dateTime={post.publishedAt}>{formatPublishedDate(post.publishedAt)}</time>
        </p>
      </div>
    </Link>
  )
}

export default function NewsPage() {
  return (
    <main id="main-content" tabIndex="-1">
      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-b from-blue-50 via-white to-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-200/30 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0F76EC]">Homezai News</p>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-[#0C3D8A] sm:text-6xl">News, partnerships, and industry perspectives.</h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            Follow Homezai announcements, media coverage, and perspectives shaping the future of real estate technology.
          </p>
        </div>
      </section>
      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8" aria-labelledby="latest-articles-heading">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-newspaper h-6 w-6 text-[#0F76EC]" aria-hidden="true">
              <path d="M15 18h-5" />
              <path d="M18 14h-8" />
              <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2" />
              <rect width="8" height="4" x="10" y="6" rx="1" />
            </svg>
            <h2 id="latest-articles-heading" className="text-2xl font-semibold text-[#0C3D8A]">{"News & Media Citations"}</h2>
          </div>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">The latest Homezai announcements and coverage from across the real estate industry.</p>
          <div id="latest-articles" className="mt-8 scroll-mt-28">
            {posts.length === 0 ? (
              <p className="mt-6 leading-7 text-slate-600">The first Homezai announcements are on their way.</p>
            ) : (
              <div className="mt-6 grid gap-6">
                {posts.map((post, index) => (
                  <NewsCard key={post.id} post={post} featured={index === 0} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
