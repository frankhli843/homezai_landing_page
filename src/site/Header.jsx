import { trackCtaClick } from '../analytics'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { APP_URL, NAV_GROUPS } from './navigation.js'
import { HOMEZAI_WORDMARK, HOMEZAI_WORDMARK_ALT, HOMEZAI_WORDMARK_HEIGHT, HOMEZAI_WORDMARK_WIDTH } from '../brand.js'

function ChevronDown() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function MenuIcon({ open }) {
  if (open) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x h-5 w-5">
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    )
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu h-5 w-5">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)

  // Close the mobile menu once a link in it is followed, including a hash jump on the same page.
  const closeOnLink = (event) => {
    if (event.target.closest('a')) setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md" role="banner">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label="Homezai home" className="site-logo-link shrink-0 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
          <img src={HOMEZAI_WORDMARK} alt={HOMEZAI_WORDMARK_ALT} width={HOMEZAI_WORDMARK_WIDTH} height={HOMEZAI_WORDMARK_HEIGHT} className="h-10 w-auto sm:h-11" />
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {NAV_GROUPS.map((group) => (
            <div className="group relative" key={group.label}>
              <Link to={group.to} className="inline-flex items-center gap-1.5 rounded-md px-2 py-2 text-sm font-medium text-slate-700 transition-colors hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2" aria-haspopup="true">
                {group.label}
                <ChevronDown />
              </Link>
              <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-900/10">
                  {group.items.map((item) => (
                    <div key={item.label}>
                      <Link to={item.to} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-700 focus:bg-blue-50 focus:text-blue-700 focus:outline-none">
                        {item.label}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div className="ml-2 flex items-center gap-2">
            <a href={APP_URL} onClick={() => trackCtaClick('app_login_click', 'navbar')} className="rounded-lg border border-blue-200 bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 transition-colors hover:border-blue-300 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
              LOG IN
            </a>
            <Link to="/try-now" onClick={() => trackCtaClick('try_now_click', 'navbar')} className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
              TRY NOW
            </Link>
          </div>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
            aria-expanded={open}
            aria-haspopup="true"
            aria-controls="mobile-navigation"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            onClick={() => setOpen((value) => !value)}
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>
      {open ? (
        <nav id="mobile-navigation" className="border-t border-slate-200 bg-white px-4 py-5 md:hidden" aria-label="Mobile navigation" onClick={closeOnLink}>
          {NAV_GROUPS.map((group) => (
            <div className="mb-5 last:mb-0" key={group.label}>
              <Link to={group.to} className="mb-2 block rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:bg-blue-50 hover:text-blue-700">
                {group.label}
              </Link>
              <div className="grid gap-1">
                {group.items.map((item) => (
                  <div key={item.label}>
                    <Link to={item.to} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700">
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <a href={APP_URL} onClick={() => trackCtaClick('app_login_click', 'navbar')} className="mt-5 block rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 text-center text-sm font-semibold text-blue-700 hover:border-blue-300 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600">
            LOG IN
          </a>
          <Link to="/try-now" onClick={() => trackCtaClick('try_now_click', 'navbar')} className="mt-2 block rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
            TRY NOW
          </Link>
        </nav>
      ) : null}
    </header>
  )
}
