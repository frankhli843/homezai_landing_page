import { trackCtaClick } from '../../analytics'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import VirtualDemo from '../components/VirtualDemo.jsx'

/* Pro plans: $8 per paid user per month, billed yearly ($96 per user per year). */
const PRO_MONTHLY_PER_USER = 8
const TEAM_MIN_USERS = 2
const TEAM_MAX_USERS = 24

function formatUsd(amount) {
  return `$${amount.toLocaleString('en-US')}`
}

/*
 * The design reserves a 16:9 video for each onboarding step. The walkthroughs are not
 * recorded yet, so a step shows its written guidance alone until it has a YouTube id.
 */
const ONBOARDING_VIDEO_IDS = {}

function OnboardingVideo({ title }) {
  const videoId = ONBOARDING_VIDEO_IDS[title]
  if (!videoId) return null
  return (
    <div className="aspect-video bg-slate-950">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title={`${title} walkthrough`}
        loading="lazy"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

export default function PricingPage() {
  const [teamUsers, setTeamUsers] = useState(TEAM_MIN_USERS)
  const teamMonthly = teamUsers * PRO_MONTHLY_PER_USER
  const teamYearly = teamMonthly * 12

  return (
    <main id="main-content" tabIndex="-1">
      <section className="overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white px-4 pb-16 pt-20 text-center sm:px-6 sm:pb-20 sm:pt-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block">Simple Pricing.</span>
              <span className="block">
                <span className="text-[#0F76EC]">Powerful</span>
                {" Possibilities."}
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">Find the Homezai plan that fits your business.</p>
            <div className="mt-9 flex items-center justify-center">
              <Link to="/try-now" onClick={() => trackCtaClick('try_now_click', 'hero')} className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 sm:w-auto">
                Try Now
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-5 w-5" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="onboarding" className="scroll-mt-24 border-y border-blue-100 bg-blue-50/50 px-4 py-20 sm:px-6 sm:py-28 lg:px-8" aria-labelledby="onboarding-heading">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Onboarding</p>
            <h2 id="onboarding-heading" className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Follow the value from first click to lasting trust
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {Object.keys(ONBOARDING_VIDEO_IDS).length > 0
                ? 'Explore a curated learning path through the Homezai workflow, with a focused video walkthrough for every value add.'
                : 'Explore a curated learning path through the Homezai workflow, one step at a time.'}
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-12">
            <article className="lg:col-span-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ">
              <OnboardingVideo title="Profile set up" />
              <div className="p-6 ">
                <div className="flex items-start gap-3">
                  <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 h-10 w-10 shrink-0 rounded-xl" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-7 w-7 h-5 w-5">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    <svg viewBox="0 0 20 16" className="absolute -right-2 -top-2 h-5 w-6 text-slate-950" fill="none">
                      <path d="M3 8 1 5M9 5V1M15 8l3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-600">01 · Set up</p>
                    <h3 className="mt-2 font-bold text-slate-950">Profile set up</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Set up your profile, preferences, and availability before activating your first listing.
                    </p>
                  </div>
                </div>
              </div>
            </article>
            <article className="lg:col-span-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ">
              <OnboardingVideo title="Showing scheduling" />
              <div className="p-6 ">
                <div className="flex items-start gap-3">
                  <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 h-10 w-10 shrink-0 rounded-xl" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days h-7 w-7 h-5 w-5">
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
                    <svg viewBox="0 0 20 16" className="absolute -right-2 -top-2 h-5 w-6 text-slate-950" fill="none">
                      <path d="M3 8 1 5M9 5V1M15 8l3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-600">02 · Convert</p>
                    <h3 className="mt-2 font-bold text-slate-950">Showing scheduling</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">Turn content into clients with AI augmented showing experiences.</p>
                  </div>
                </div>
              </div>
            </article>
            <article className="lg:col-span-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ">
              <OnboardingVideo title="AI showing operator" />
              <div className="p-6 ">
                <div className="flex items-start gap-3">
                  <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 h-10 w-10 shrink-0 rounded-xl" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-text h-7 w-7 h-5 w-5">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      <path d="M13 8H7" />
                      <path d="M17 12H7" />
                    </svg>
                    <svg viewBox="0 0 20 16" className="absolute -right-2 -top-2 h-5 w-6 text-slate-950" fill="none">
                      <path d="M3 8 1 5M9 5V1M15 8l3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-600">03 · Automate</p>
                    <h3 className="mt-2 font-bold text-slate-950">AI showing operator</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">Support coordination and follow-up without adding more administrative work.</p>
                  </div>
                </div>
              </div>
            </article>
            <article className="lg:col-span-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ">
              <OnboardingVideo title="Listing analytics" />
              <div className="p-6 ">
                <div className="flex items-start gap-3">
                  <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 h-10 w-10 shrink-0 rounded-xl" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-column h-7 w-7 h-5 w-5">
                      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                      <path d="M18 17V9" />
                      <path d="M13 17V5" />
                      <path d="M8 17v-3" />
                    </svg>
                    <svg viewBox="0 0 20 16" className="absolute -right-2 -top-2 h-5 w-6 text-slate-950" fill="none">
                      <path d="M3 8 1 5M9 5V1M15 8l3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-600">04 · Understand</p>
                    <h3 className="mt-2 font-bold text-slate-950">Listing analytics</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">See showing and engagement activity, then identify the next opportunity.</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section id="pricing-tiers" className="scroll-mt-24 px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8" aria-labelledby="pricing-tiers-heading">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 id="pricing-tiers-heading" className="text-2xl font-bold tracking-tight">Choose your plan</h2>
            <p className="mt-2 text-sm text-slate-600">Pro plans are billed yearly at $96 per paid user.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <article className="flex min-h-[500px] flex-col rounded-2xl border p-5 shadow-sm border-blue-600 bg-blue-50/60 ring-1 ring-blue-600">
              <div className="flex items-center justify-between">
                <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 h-10 w-10 rounded-xl" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round h-7 w-7 h-5 w-5">
                    <circle cx="12" cy="8" r="5" />
                    <path d="M20 21a8 8 0 0 0-16 0" />
                  </svg>
                  <svg viewBox="0 0 20 16" className="absolute -right-2 -top-2 h-5 w-6 text-slate-950" fill="none">
                    <path d="M3 8 1 5M9 5V1M15 8l3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">Default plan</span>
              </div>
              <h3 className="mt-5 text-lg font-bold">Premium Agent</h3>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-3xl font-bold">$0</span>
                <span className="pb-1 text-xs text-slate-500">/ month</span>
              </div>
              <p className="mt-1 text-xs text-slate-500">Free</p>
              <ul className="mt-5 space-y-3">
                <li className="flex items-start gap-2 text-sm leading-5 text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Showing scheduling
                </li>
                <li className="flex items-start gap-2 text-sm leading-5 text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  1 agent
                </li>
                <li className="flex items-start gap-2 text-sm leading-5 text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  AI assistant
                </li>
                <li className="flex items-start gap-2 text-sm leading-5 text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Social media lead capture
                </li>
                <li className="flex items-start gap-2 text-sm leading-5 text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Online support and knowledge base
                </li>
              </ul>
              <Link to="/try-now" onClick={() => trackCtaClick('try_now_click', 'premium_plan')} className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold bg-blue-600 text-white hover:bg-blue-700">
                Try Now
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </article>
            <article className="flex min-h-[500px] flex-col rounded-2xl border p-5 shadow-sm border-slate-200 bg-white">
              <div className="flex items-center justify-between">
                <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 h-10 w-10 rounded-xl" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles h-7 w-7 h-5 w-5">
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                    <path d="M20 3v4" />
                    <path d="M22 5h-4" />
                    <path d="M4 17v2" />
                    <path d="M5 18H3" />
                  </svg>
                  <svg viewBox="0 0 20 16" className="absolute -right-2 -top-2 h-5 w-6 text-slate-950" fill="none">
                    <path d="M3 8 1 5M9 5V1M15 8l3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">Optional upgrade</span>
              </div>
              <h3 className="mt-5 text-lg font-bold">Pro Agent</h3>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-3xl font-bold">$8</span>
                <span className="pb-1 text-xs text-slate-500">/ month equivalent</span>
              </div>
              <p className="mt-1 text-xs text-slate-500">Billed yearly · $96 per year</p>
              <p className="mt-5 text-sm font-bold text-slate-800">No included plan credits</p>
              <ul className="mt-5 space-y-3">
                <li className="flex items-start gap-2 text-sm leading-5 text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Showing scheduling
                </li>
                <li className="flex items-start gap-2 text-sm leading-5 text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  1 agent
                </li>
                <li className="flex items-start gap-2 text-sm leading-5 text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  AI voice assistant
                </li>
                <li className="flex items-start gap-2 text-sm leading-5 text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Social, open house and website lead capture
                </li>
                <li className="flex items-start gap-2 text-sm leading-5 text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Priority service and support
                </li>
              </ul>
              <Link to="/try-now" onClick={() => trackCtaClick('try_now_click', 'pro_plan')} className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold border border-blue-600 text-blue-700 hover:bg-blue-50">
                Try Now
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </article>
            <article className="flex min-h-[500px] flex-col rounded-2xl border p-5 shadow-sm border-slate-200 bg-white">
              <div className="flex items-center justify-between">
                <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 h-10 w-10 rounded-xl" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-7 w-7 h-5 w-5">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <svg viewBox="0 0 20 16" className="absolute -right-2 -top-2 h-5 w-6 text-slate-950" fill="none">
                    <path d="M3 8 1 5M9 5V1M15 8l3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  </svg>
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold">Pro Team</h3>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-3xl font-bold">{formatUsd(teamMonthly)}</span>
                <span className="pb-1 text-xs text-slate-500">/ month equivalent</span>
              </div>
              <p className="mt-1 text-xs text-slate-500">Billed yearly · {formatUsd(teamYearly)} total</p>
              <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/70 p-3">
                <div className="flex items-center justify-between gap-2">
                  <label htmlFor="team-user-count" className="text-xs font-bold text-slate-900">Team users</label>
                  <output htmlFor="team-user-count" aria-live="polite" className="rounded-md bg-white px-2 py-1 text-xs font-bold text-blue-700 shadow-sm">
                    {teamUsers}
                    {" users"}
                  </output>
                </div>
                <p className="mt-1 text-[11px] leading-4 text-slate-600">$8 per paid user/month, billed yearly</p>
                <div className="mt-3 flex items-center gap-2">
                  <button type="button" disabled={teamUsers <= TEAM_MIN_USERS} onClick={() => setTeamUsers((n) => Math.max(TEAM_MIN_USERS, n - 1))} aria-label="Remove one Pro Team user" className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-700 transition-colors hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-40">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus h-3.5 w-3.5" aria-hidden="true">
                      <path d="M5 12h14" />
                    </svg>
                  </button>
                  <div className="min-w-0 flex-1">
                    <input id="team-user-count" type="range" min={TEAM_MIN_USERS} max={TEAM_MAX_USERS} step="1" className="h-2 w-full cursor-pointer accent-blue-600" value={teamUsers} onChange={(event) => setTeamUsers(Number(event.target.value))} />
                    <div className="mt-0.5 flex justify-between text-[10px] font-semibold text-slate-500" aria-hidden="true">
                      <span>2</span>
                      <span>24</span>
                    </div>
                  </div>
                  <button type="button" disabled={teamUsers >= TEAM_MAX_USERS} onClick={() => setTeamUsers((n) => Math.min(TEAM_MAX_USERS, n + 1))} aria-label="Add one Pro Team user" className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-700 transition-colors hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-40">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus h-3.5 w-3.5" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                  </button>
                </div>
              </div>
              <p className="mt-5 text-sm font-bold text-slate-800">No included plan credits</p>
              <ul className="mt-5 space-y-3">
                <li className="flex items-start gap-2 text-sm leading-5 text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Everything in Pro Agent
                </li>
                <li className="flex items-start gap-2 text-sm leading-5 text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Team management
                </li>
                <li className="flex items-start gap-2 text-sm leading-5 text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Shared showing calendar
                </li>
                <li className="flex items-start gap-2 text-sm leading-5 text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Sales and showing analytics
                </li>
                <li className="flex items-start gap-2 text-sm leading-5 text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  White-label widgets and API access
                </li>
              </ul>
              <p className="mt-5 border-t border-slate-200 pt-4 text-xs font-semibold text-slate-500">{teamUsers} paid users · ${PRO_MONTHLY_PER_USER} per user/month</p>
              <Link to="/try-now" onClick={() => trackCtaClick('try_now_click', 'team_plan')} className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold border border-blue-600 text-blue-700 hover:bg-blue-50">
                Try Now
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </article>
            <article className="flex min-h-[500px] flex-col rounded-2xl border p-5 shadow-sm border-slate-200 bg-white">
              <div className="flex items-center justify-between">
                <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 h-10 w-10 rounded-xl" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building2 lucide-building-2 h-7 w-7 h-5 w-5">
                    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                    <path d="M10 6h4" />
                    <path d="M10 10h4" />
                    <path d="M10 14h4" />
                    <path d="M10 18h4" />
                  </svg>
                  <svg viewBox="0 0 20 16" className="absolute -right-2 -top-2 h-5 w-6 text-slate-950" fill="none">
                    <path d="M3 8 1 5M9 5V1M15 8l3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  </svg>
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold">Brokerage Enterprise</h3>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-3xl font-bold">Custom</span>
              </div>
              <p className="mt-1 text-xs text-slate-500">Priced with our sales team</p>
              <ul className="mt-5 space-y-3">
                <li className="flex items-start gap-2 text-sm leading-5 text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Everything in Pro Team
                </li>
                <li className="flex items-start gap-2 text-sm leading-5 text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Custom integrations
                </li>
                <li className="flex items-start gap-2 text-sm leading-5 text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Service level agreement
                </li>
                <li className="flex items-start gap-2 text-sm leading-5 text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  System integrations such as web and CRM
                </li>
                <li className="flex items-start gap-2 text-sm leading-5 text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Custom contracts
                </li>
              </ul>
              <Link to="/partners/brokerages" onClick={() => trackCtaClick('enterprise_cta_click', 'pricing_card')} className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold border border-blue-600 text-blue-700 hover:bg-blue-50">
                Explore Partnership
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </article>
          </div>
        </div>
      </section>
      <VirtualDemo />
      <section id="features" className="scroll-mt-24 bg-slate-50 px-4 py-20 sm:px-6 sm:py-28 lg:px-8" aria-labelledby="features-heading">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Features</p>
            <h2 id="features-heading" className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Built to move every opportunity forward</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Start with the workflows your business needs today, then add team and enterprise capabilities as you grow.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 h-12 w-12 rounded-xl" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days h-7 w-7 h-6 w-6">
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
                <svg viewBox="0 0 20 16" className="absolute -right-2 -top-2 h-5 w-6 text-slate-950" fill="none">
                  <path d="M3 8 1 5M9 5V1M15 8l3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </span>
              <h3 className="mt-6 text-xl font-bold text-slate-950">Showing scheduling</h3>
              <p className="mt-3 leading-7 text-slate-600">Turn content into clients with AI augmented showing experiences.</p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 h-12 w-12 rounded-xl" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-text h-7 w-7 h-6 w-6">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  <path d="M13 8H7" />
                  <path d="M17 12H7" />
                </svg>
                <svg viewBox="0 0 20 16" className="absolute -right-2 -top-2 h-5 w-6 text-slate-950" fill="none">
                  <path d="M3 8 1 5M9 5V1M15 8l3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </span>
              <h3 className="mt-6 text-xl font-bold text-slate-950">AI showing operator</h3>
              <p className="mt-3 leading-7 text-slate-600">Support coordination and follow-up without adding more administrative work.</p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 h-12 w-12 rounded-xl" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mouse-pointer-click h-7 w-7 h-6 w-6">
                  <path d="M14 4.1 12 6" />
                  <path d="m5.1 8-2.9-.8" />
                  <path d="m6 12-1.9 2" />
                  <path d="M7.2 2.2 8 5.1" />
                  <path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" />
                </svg>
                <svg viewBox="0 0 20 16" className="absolute -right-2 -top-2 h-5 w-6 text-slate-950" fill="none">
                  <path d="M3 8 1 5M9 5V1M15 8l3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </span>
              <h3 className="mt-6 text-xl font-bold text-slate-950">Lead capture</h3>
              <p className="mt-3 leading-7 text-slate-600">Turn interest from social, open houses, and websites into actionable conversations.</p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 h-12 w-12 rounded-xl" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-column h-7 w-7 h-6 w-6">
                  <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                  <path d="M18 17V9" />
                  <path d="M13 17V5" />
                  <path d="M8 17v-3" />
                </svg>
                <svg viewBox="0 0 20 16" className="absolute -right-2 -top-2 h-5 w-6 text-slate-950" fill="none">
                  <path d="M3 8 1 5M9 5V1M15 8l3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </span>
              <h3 className="mt-6 text-xl font-bold text-slate-950">Listing analytics</h3>
              <p className="mt-3 leading-7 text-slate-600">See showing and engagement activity, then identify the next opportunity.</p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 h-12 w-12 rounded-xl" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-7 w-7 h-6 w-6">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <svg viewBox="0 0 20 16" className="absolute -right-2 -top-2 h-5 w-6 text-slate-950" fill="none">
                  <path d="M3 8 1 5M9 5V1M15 8l3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </span>
              <h3 className="mt-6 text-xl font-bold text-slate-950">Team workflows</h3>
              <p className="mt-3 leading-7 text-slate-600">Coordinate shared calendars, team access, and activity across your organization.</p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 h-12 w-12 rounded-xl" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check h-7 w-7 h-6 w-6">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <svg viewBox="0 0 20 16" className="absolute -right-2 -top-2 h-5 w-6 text-slate-950" fill="none">
                  <path d="M3 8 1 5M9 5V1M15 8l3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </span>
              <h3 className="mt-6 text-xl font-bold text-slate-950">Data privacy and control</h3>
              <p className="mt-3 leading-7 text-slate-600">Keep your customer relationships, brand, and listing activity closer to your business.</p>
            </article>
          </div>
          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:flex-row sm:items-center sm:p-8">
            <div className="flex items-start gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-workflow mt-1 h-6 w-6 shrink-0 text-blue-600" aria-hidden="true">
                <rect width="8" height="8" x="3" y="3" rx="2" />
                <path d="M7 11v4a2 2 0 0 0 2 2h4" />
                <rect width="8" height="8" x="13" y="13" rx="2" />
              </svg>
              <div>
                <h3 className="font-bold text-slate-950">Need a workflow tailored to your organization?</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">Explore custom integrations and enterprise partnership options.</p>
              </div>
            </div>
            <Link to="/partners/brokerages" onClick={() => trackCtaClick('enterprise_cta_click', 'features_section')} className="inline-flex shrink-0 items-center gap-2 font-bold text-blue-700 hover:text-blue-800">
              Explore Partnership
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      <section id="pricing-faq" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28 lg:px-8" aria-labelledby="pricing-faq-heading">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Frequently Asked Questions</p>
            <h2 id="pricing-faq-heading" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Pricing questions, answered clearly</h2>
          </div>
          <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-6 shadow-sm sm:px-8">
            <details className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                How does yearly billing work?
                <span className="text-2xl font-light text-blue-600 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <div className="max-w-3xl pt-4 leading-7 text-slate-600">Paid plans are $8/month per user, billed upfront at $96/year.</div>
            </details>
            <details className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                Who can use each plan?
                <span className="text-2xl font-light text-blue-600 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <div className="max-w-3xl pt-4 leading-7 text-slate-600">
                <dl className="space-y-4">
                  <div>
                    <dt className="font-bold text-slate-900">Premium Agent</dt>
                    <dd className="mt-1">For one individual agent.</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-slate-900">Pro Agent</dt>
                    <dd className="mt-1">For one individual agent.</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-slate-900">Pro Team</dt>
                    <dd className="mt-1">One Team Admin, one location, and 2–24 agents.</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-slate-900">Brokerage</dt>
                    <dd className="mt-1">For individual brokerages with multiple offices, teams, and agents.</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-slate-900">Enterprise</dt>
                    <dd className="mt-1">
                      For large organizations with multiple lines of business, or franchise brands with both company-owned and affiliate-owned brokerages.
                    </dd>
                  </div>
                </dl>
              </div>
            </details>
            <details className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                What will the cancellation policy be?
                <span className="text-2xl font-light text-blue-600 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <div className="max-w-3xl pt-4 leading-7 text-slate-600">
                <div className="space-y-5">
                  <div>
                    <h3 className="font-bold text-slate-900">Free Subscriptions</h3>
                    <p className="mt-2">Users may cancel their free subscription at any time without penalty or obligation.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Paid Subscriptions</h3>
                    <p className="mt-2">
                      Paid subscriptions automatically renew at the end of each subscription term unless canceled in accordance with this policy.
                    </p>
                    <p className="mt-3">
                      {"Subscribers may opt out of automatic renewal or cancel their subscription by providing at least "}
                      <strong className="font-semibold text-slate-900">{"30 days' notice before the next renewal term begins"}</strong>
                      .
                    </p>
                    <ul className="mt-3 list-disc space-y-2 pl-5">
                      <li>
                        <strong className="font-semibold text-slate-900">Cancellation Notice:</strong>
                        {" "}
                        Cancellation requests must be submitted at least 30 days before the current subscription term expires.
                      </li>
                      <li>
                        <strong className="font-semibold text-slate-900">Subscription Access:</strong>
                        {" "}
                        Subscribers retain access to their paid services through the end of their current subscription term.
                      </li>
                      <li>
                        <strong className="font-semibold text-slate-900">Billing:</strong>
                        {" Timely cancellation prevents future renewal charges."}
                      </li>
                      <li>
                        <strong className="font-semibold text-slate-900">Late Cancellation:</strong>
                        {" Requests received less than 30 days before the next renewal term may result in renewal for an additional term, subject to applicable law."}
                      </li>
                      <li>
                        <strong className="font-semibold text-slate-900">Refunds:</strong>
                        {" Subscription fees already paid are nonrefundable unless otherwise required by applicable law or expressly stated in the subscription agreement."}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">How to Cancel</h3>
                    <p className="mt-2">
                      Subscribers may request cancellation by emailing customer support at
                      {" "}
                      <a href="mailto:support@homezai.com" className="font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-800">
                        support@homezai.com
                      </a>
                      .
                    </p>
                    <p className="mt-3">
                      Cancellation requests will be processed in accordance with the applicable subscription terms. Homezai will provide confirmation of the cancellation and its effective date.
                    </p>
                  </div>
                </div>
              </div>
            </details>
            <details className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                How do I activate my first listing?
                <span className="text-2xl font-light text-blue-600 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <div className="max-w-3xl pt-4 leading-7 text-slate-600">
                Select Try Now, activate your account or request access, then add the property address in the Homezai app and choose the first workflow you want to activate. Your first listing is at no cost.
              </div>
            </details>
            <details className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                Which features will be included in each tier?
                <span className="text-2xl font-light text-blue-600 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <div className="max-w-3xl pt-4 leading-7 text-slate-600">
                The plan cards show the current included features. Credits are purchased separately and can be topped up as needed.
              </div>
            </details>
          </div>
        </div>
      </section>
      <section className="bg-blue-600 px-4 py-20 text-center text-white sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Start with your first listing at no cost</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Choose the plan that fits your business and begin with the listing you want to activate first.
          </p>
          <Link to="/try-now" onClick={() => trackCtaClick('try_now_click', 'cta_section')} className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-blue-700 shadow-sm transition-all hover:bg-blue-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600">
            Try Now
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-5 w-5" aria-hidden="true">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}
