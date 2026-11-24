import { Link } from 'react-router-dom'

import { CONTACT, LEGAL_LINKS, NAV_GROUPS } from './navigation.js'
import { HOMEZAI_WORDMARK, HOMEZAI_WORDMARK_ALT, HOMEZAI_WORDMARK_HEIGHT, HOMEZAI_WORDMARK_WIDTH } from '../brand.js'

function FooterColumn({ heading, to, links }) {
  return (
    <div>
      <h2 className="text-sm font-bold uppercase tracking-wider text-white">
        {to ? (
          <Link to={to} className="transition-colors hover:text-blue-300">
            {heading}
          </Link>
        ) : (
          heading
        )}
      </h2>
      <ul className="mt-5 space-y-3 text-sm text-slate-400">
        {links.map((link) => (
          <li key={link.label}>
            <Link to={link.to} className="transition-colors hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-slate-950 px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-slate-800 pb-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="inline-flex rounded-lg bg-white px-4 py-3">
              <img src={HOMEZAI_WORDMARK} alt={HOMEZAI_WORDMARK_ALT} width={HOMEZAI_WORDMARK_WIDTH} height={HOMEZAI_WORDMARK_HEIGHT} className="h-7 w-auto" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              AI real estate showings software with intelligent appointment scheduling for the modern real estate professional.
            </p>
          </div>
          {NAV_GROUPS.map((group) => (
            <FooterColumn key={group.label} heading={group.label} to={group.to} links={group.items} />
          ))}
          <FooterColumn heading="Legal" links={LEGAL_LINKS} />
        </div>
        <div className="grid gap-8 border-b border-slate-800 py-7 sm:grid-cols-3">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-200">Address</h2>
            <address className="mt-2 text-sm not-italic leading-6 text-slate-400">
              {CONTACT.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>
          </div>
          <div className="sm:text-center">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-200">Phone</h2>
            <p className="mt-2 text-sm text-slate-400">
              <a href={CONTACT.phoneHref} className="transition-colors hover:text-white">{CONTACT.phoneDisplay}</a>
            </p>
          </div>
          <div className="sm:text-right">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-200">Follow Us on Social</h2>
<div className="mt-3 flex gap-2 sm:justify-end">
              <a href="https://www.instagram.com/homez.ai/" target="_blank" rel="noopener noreferrer" aria-label="Follow Homezai on Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition-colors hover:border-blue-400 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-950">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram h-5 w-5" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61591624104308" target="_blank" rel="noopener noreferrer" aria-label="Follow Homezai on Facebook" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition-colors hover:border-blue-400 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-950">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook h-5 w-5" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/homezai/home/" target="_blank" rel="noopener noreferrer" aria-label="Follow Homezai on LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition-colors hover:border-blue-400 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-950">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin h-5 w-5" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="https://search.google.com/local/writereview?placeid=ChIJZ0nRhwu32YgRRo6jA3TguPk" target="_blank" rel="noopener noreferrer" aria-label="Review Homezai on Google Business" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition-colors hover:border-blue-400 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-950">
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <path fill="#4285F4" d="M21.35 12.2c0-.64-.06-1.25-.16-1.84H12v3.48h5.25a4.49 4.49 0 0 1-1.95 2.94v2.26h3.16c1.85-1.7 2.89-4.22 2.89-6.84Z" />
                  <path fill="#34A853" d="M12 21.75c2.64 0 4.85-.87 6.46-2.71l-3.16-2.26c-.88.59-2 .94-3.3.94-2.55 0-4.7-1.72-5.47-4.03H3.27v2.33A9.75 9.75 0 0 0 12 21.75Z" />
                  <path fill="#FBBC05" d="M6.53 13.69A5.86 5.86 0 0 1 6.22 12c0-.59.11-1.16.31-1.69V7.98H3.27A9.75 9.75 0 0 0 2.25 12c0 1.44.35 2.8 1.02 4.02l3.26-2.33Z" />
                  <path fill="#EA4335" d="M12 6.28c1.44 0 2.72.49 3.73 1.46l2.8-2.8A9.38 9.38 0 0 0 12 2.25a9.75 9.75 0 0 0-8.73 5.73l3.26 2.33C7.3 8 9.45 6.28 12 6.28Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <p className="pt-7 text-center text-xs text-slate-500">© 2026 Homezai. All rights reserved.</p>
      </div>
    </footer>
  )
}
