import { useState } from 'react'
import { Link } from 'react-router-dom'

import { trackEvent } from '../../analytics'
import { APP_URL } from '../navigation.js'

/*
 * TRY NOW follows the roster-first journey. Agents whose brokerage, MLS or association
 * already works with Homezai activate the account that is waiting for them; everyone
 * else requests access. The login itself is only ever created inside the Homezai app,
 * so this page has no email or password fields of its own.
 */

const ICON_PROPS = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const STEPS = [
  {
    label: 'Create Login',
    title: 'Create Login',
    intro: 'Your Homezai login is created and kept in the secure Homezai app.',
    icon: (
      <svg {...ICON_PROPS} className="lucide lucide-user-round h-6 w-6">
        <circle cx="12" cy="8" r="5" />
        <path d="M20 21a8 8 0 0 0-16 0" />
      </svg>
    ),
  },
  {
    label: 'Select Listing',
    title: 'Select Listing',
    intro: 'Pick the listing you want to promote. Premium Agent includes your first listing at no cost.',
    icon: (
      <svg {...ICON_PROPS} className="lucide lucide-house h-6 w-6">
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </svg>
    ),
  },
  {
    label: 'Set Showing Settings',
    title: 'Set Showing Settings',
    intro: 'Add your availability and showing preferences so buyers only see times that work for you.',
    icon: (
      <svg {...ICON_PROPS} className="lucide lucide-calendar-days h-6 w-6">
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
        <path d="M8 14h.01" />
        <path d="M12 14h.01" />
        <path d="M16 14h.01" />
        <path d="M8 18h.01" />
        <path d="M12 18h.01" />
        <path d="M16 18h.01" />
      </svg>
    ),
  },
  {
    label: 'Schedule Showings From Social',
    title: 'Schedule Showings From Social',
    intro: 'Share your booking link on social media. Buyers request a time and Homezai handles the scheduling.',
    icon: (
      <svg {...ICON_PROPS} className="lucide lucide-message-square-text h-6 w-6">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M13 8H7" />
        <path d="M17 12H7" />
      </svg>
    ),
  },
  {
    label: 'Watch Virtual Demo',
    title: 'Watch Virtual Demo',
    intro: 'See how a listing moves from social discovery to a confirmed showing.',
    icon: (
      <svg {...ICON_PROPS} className="lucide lucide-play h-6 w-6">
        <polygon points="6 3 20 12 6 21 6 3" />
      </svg>
    ),
  },
]

function ArrowRight() {
  return (
    <svg {...ICON_PROPS} className="lucide lucide-arrow-right h-5 w-5">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function trackAppClick(label) {
  return () => trackEvent('try_now_app_click', { cta_label: label, page_path: window.location.pathname })
}

function LoginChoices() {
  return (
    <div className="mt-6 grid gap-5 sm:grid-cols-2">
      <div className="flex flex-col rounded-2xl border border-blue-200 bg-blue-50/70 p-5">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Already on a roster</p>
        <h3 className="mt-2 text-lg font-bold text-slate-950">Activate your account</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          If your brokerage, MLS or association works with Homezai, your account may already be waiting for you. Log in with the email address they have on file. Never set a password? Choose Forgot password in the app.
        </p>
        <a href={APP_URL} target="_blank" rel="noopener noreferrer" onClick={trackAppClick('Activate my account')} className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-bold text-white hover:bg-blue-700">
          Activate my account
          <ArrowRight />
        </a>
      </div>
      <div className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500">New to Homezai</p>
        <h3 className="mt-2 text-lg font-bold text-slate-950">Request access</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Not on a roster yet, or your email was not found? Join the waitlist in the app with your name, email, city and role, and the Homezai team will follow up.
        </p>
        <a href={APP_URL} target="_blank" rel="noopener noreferrer" onClick={trackAppClick('Request access')} className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg border border-blue-600 px-5 py-3 text-sm font-bold text-blue-700 hover:bg-blue-50">
          Request access
          <ArrowRight />
        </a>
      </div>
    </div>
  )
}

export default function TryNowPage() {
  const [active, setActive] = useState(0)
  const step = STEPS[active]
  const last = active === STEPS.length - 1

  return (
    <main id="main-content" tabIndex="-1" className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            Your first listing is at no cost
          </p>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            <span className="block">Schedule showings from social</span>
            <span className="block">in five clear steps</span>
          </h1>
        </div>
        <div className="mx-auto mt-10 max-w-4xl">
          <ol className="grid grid-cols-5 gap-2" aria-label={`Step ${active + 1} of ${STEPS.length}`}>
            {STEPS.map((item, index) => (
              <li key={item.label}>
                <button type="button" className="block w-full text-left" onClick={() => setActive(index)} aria-current={index === active ? 'step' : undefined}>
                  <span className={`block h-2 rounded-full ${index <= active ? 'bg-blue-600' : 'bg-slate-200'}`} />
                  <span className={`mt-2 hidden text-center text-[10px] font-bold sm:block ${index <= active ? 'text-blue-700' : 'text-slate-400'}`}>{item.label}</span>
                </button>
              </li>
            ))}
          </ol>
          <section className="mt-7 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5" aria-live="polite">
            <div className="border-b border-slate-200 bg-slate-950 px-6 py-5 text-white sm:px-9">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-300">
                Step {active + 1} of {STEPS.length}
              </p>
              <h2 className="mt-2 text-2xl font-bold">{step.title}</h2>
            </div>
            <div className="p-6 sm:p-9">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">{step.icon}</div>
                <p className="mt-5 text-slate-600">{step.intro}</p>
                {active === 0 ? <LoginChoices /> : null}
                {active > 0 && !last ? <p className="mt-4 text-sm text-slate-500">You complete this step inside the Homezai app after you log in.</p> : null}
                {last ? (
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link to="/benefits#virtual-demo" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-bold text-white hover:bg-blue-700">
                      Watch the Virtual Demo
                      <ArrowRight />
                    </Link>
                    <a href={APP_URL} target="_blank" rel="noopener noreferrer" onClick={trackAppClick('Open the Homezai app')} className="inline-flex items-center gap-2 rounded-lg border border-blue-600 px-5 py-3 text-sm font-bold text-blue-700 hover:bg-blue-50">
                      Open the Homezai app
                    </a>
                  </div>
                ) : null}
              </div>
              <div className="mt-8 flex items-center justify-between gap-3 border-t border-slate-100 pt-6">
                <button type="button" disabled={active === 0} onClick={() => setActive((value) => Math.max(0, value - 1))} className="rounded-lg px-5 py-3 font-semibold text-slate-500 disabled:invisible">
                  Back
                </button>
                {last ? null : (
                  <button type="button" onClick={() => setActive((value) => Math.min(STEPS.length - 1, value + 1))} className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-bold text-white hover:bg-blue-700">
                    Continue
                    <ArrowRight />
                  </button>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
