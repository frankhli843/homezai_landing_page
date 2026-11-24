import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function PartnersMlsPage() {
  const [expanded, setExpanded] = useState(false)

  return (
    <main id="main-content" tabIndex="-1">
      <section className="overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white px-4 pb-20 pt-20 text-center sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 text-left lg:grid-cols-[0.58fr_0.42fr] lg:items-center">
          <div className="text-center lg:text-left">
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles h-4 w-4" aria-hidden="true">
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                <path d="M20 3v4" />
                <path d="M22 5h-4" />
                <path d="M4 17v2" />
                <path d="M5 18H3" />
              </svg>
              {"MLS Partners & Integrations"}
            </p>
            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">Modern Showing Technology for MLS Communities.</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Homezai helps MLSs deliver AI augmented showing coordination as a trusted, integrated member benefit—without giving up control of the brand or data.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                Explore MLS Partnership
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-5 w-5" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
              <Link to="/benefits#virtual-demo" className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 hover:bg-slate-50">
                Request a Demo
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-blue-100/70 via-white to-rose-50/70 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-6 shadow-xl shadow-blue-950/10 sm:p-8">
              <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-blue-600">Featured MLS Partner</p>
              <div className="mt-5 flex min-h-52 items-center justify-center rounded-2xl border border-slate-100 bg-white px-4 py-8">
                <img src="/images/site/san-diego-mls-featured-partner.png" alt="San Diego MLS" className="h-auto w-full max-w-[480px] object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-y border-blue-100 bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Connected Ecosystem</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">MLS Integrations</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              MLS organizations, systems, and services represented in the Homezai integrations directory.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            <div className="flex min-h-32 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <img src="/images/integrations/san-diego-mls.png" alt="San Diego MLS" className="max-h-16 max-w-full object-contain" />
            </div>
            <div className="flex min-h-32 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <img src="/images/integrations/cincymls.png" alt="MLS of Greater Cincinnati" className="max-h-16 max-w-full object-contain" />
            </div>
            <div className="flex min-h-32 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <img src="/images/integrations/mred.png" alt="Midwest Real Estate Data" className="max-h-16 max-w-full object-contain" />
            </div>
            <div className="flex min-h-32 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <img src="/images/integrations/coconut-coast-organization-of-realtors.png" alt="Coconut Coast Organization of REALTORS" className="max-h-16 max-w-full object-contain" />
            </div>
            <div className={`${expanded ? 'flex' : 'hidden sm:flex'} min-h-32 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm`}>
              <img src="/images/integrations/gulf-coast-mls-mobile-area-association-of-realtors.jpg" alt="Gulf Coast MLS and Mobile Area Association of REALTORS" className="max-h-16 max-w-full object-contain" />
            </div>
            <div className={`${expanded ? 'flex' : 'hidden sm:flex'} min-h-32 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm`}>
              <img src="/images/integrations/houston-association-of-realtors.png" alt="Houston Association of REALTORS" className="max-h-16 max-w-full object-contain" />
            </div>
            <div className={`${expanded ? 'flex' : 'hidden lg:flex'} min-h-32 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm`}>
              <img src="/images/integrations/baldwin-county-association-of-realtors.png" alt="Baldwin County Association of REALTORS" className="max-h-16 max-w-full object-contain" />
            </div>
            <div className={`${expanded ? 'flex' : 'hidden lg:flex'} min-h-32 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm`}>
              <img src="/images/integrations/crmls.png" alt="California Regional MLS" className="max-h-16 max-w-full object-contain" />
            </div>
            <div className={`${expanded ? 'flex' : 'hidden'} min-h-32 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm`}>
              <img src="/images/integrations/bridge-interactive.png" alt="Bridge Interactive" className="max-h-16 max-w-full object-contain" />
            </div>
            <div className={`${expanded ? 'flex' : 'hidden'} min-h-32 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm`}>
              <img src="/images/integrations/realtyfeed.png" alt="RealtyFeed" className="max-h-16 max-w-full object-contain" />
            </div>
            <div className={`${expanded ? 'flex' : 'hidden'} min-h-32 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm`}>
              <img src="/images/integrations/rapattoni-mls.png" alt="Rapattoni MLS" className="max-h-16 max-w-full object-contain" />
            </div>
            <div className={`${expanded ? 'flex' : 'hidden'} min-h-32 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm`}>
              <img src="/images/integrations/recore.png" alt="REcore" className="max-h-16 max-w-full object-contain" />
            </div>
            <div className={`${expanded ? 'flex' : 'hidden'} min-h-32 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm`}>
              <img src="/images/integrations/mls-grid.png" alt="MLS Grid" className="max-h-16 max-w-full object-contain" />
            </div>
          </div>
          <div className="mt-8 text-center">
            <button type="button" aria-expanded={expanded} onClick={() => setExpanded((value) => !value)} className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-white px-5 py-3 font-semibold text-blue-700 shadow-sm transition-colors hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
              {expanded ? 'Show fewer integrations' : 'Show more integrations'}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-chevron-down h-5 w-5 transition-transform${expanded ? ' rotate-180' : ''}`} aria-hidden="true">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8 bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center ">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">MLS-Specific Benefits</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Create more value for agents and subscribers</h2>
            <p className="mt-6 whitespace-pre-line text-lg leading-8 text-slate-600">
              Offer a modern showing experience that helps members turn listing activity into coordinated appointments and responsive buyer engagement.
            </p>
            <ul className="mt-7 space-y-3">
              <li className="flex items-start gap-3 text-slate-700">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span className="font-medium leading-6">A differentiated member benefit</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span className="font-medium leading-6">White-label delivery under your trusted brand</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span className="font-medium leading-6">Support for organizations of varying scale</span>
              </li>
            </ul>
          </div>
          <div className="flex min-h-80 items-center justify-center rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white shadow-sm">
            <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 h-36 w-36 rounded-[2rem]" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-7 w-7 h-16 w-16">
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
        </div>
      </section>
      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8 bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:[&>*:first-child]:order-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Technology and Workflow Value</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Connect fragmented showing tasks into one workflow</h2>
            <p className="mt-6 whitespace-pre-line text-lg leading-8 text-slate-600">
              Homezai brings lead capture, scheduling, routing, communication, and reporting together so members
spend less time managing disconnected steps.
            </p>
            <ul className="mt-7 space-y-3">
              <li className="flex items-start gap-3 text-slate-700">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span className="font-medium leading-6">AI augmented appointment coordination</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span className="font-medium leading-6">Automated multi-home routing</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span className="font-medium leading-6">Buyer follow-up and listing activity insights</span>
              </li>
            </ul>
          </div>
          <div className="flex min-h-80 items-center justify-center rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white shadow-sm">
            <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 h-36 w-36 rounded-[2rem]" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-workflow h-7 w-7 h-16 w-16">
                <rect width="8" height="8" x="3" y="3" rx="2" />
                <path d="M7 11v4a2 2 0 0 0 2 2h4" />
                <rect width="8" height="8" x="13" y="13" rx="2" />
              </svg>
              <svg viewBox="0 0 20 16" className="absolute -right-2 -top-2 h-5 w-6 text-slate-950" fill="none">
                <path d="M3 8 1 5M9 5V1M15 8l3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            </span>
          </div>
        </div>
      </section>
      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8 bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center ">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Integration Opportunities</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Fit Homezai into the MLS technology ecosystem</h2>
            <p className="mt-6 whitespace-pre-line text-lg leading-8 text-slate-600">
              Build on the systems members already use through listing data, roster, calendar, CRM, and workflow integrations.
            </p>
            <ul className="mt-7 space-y-3">
              <li className="flex items-start gap-3 text-slate-700">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span className="font-medium leading-6">MLS data and roster feeds</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span className="font-medium leading-6">Calendar and CRM connectivity</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span className="font-medium leading-6">Collaborative implementation planning</span>
              </li>
            </ul>
          </div>
          <div className="flex min-h-80 items-center justify-center rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white shadow-sm">
            <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 h-36 w-36 rounded-[2rem]" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plug h-7 w-7 h-16 w-16">
                <path d="M12 22v-5" />
                <path d="M9 8V2" />
                <path d="M15 8V2" />
                <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
              </svg>
              <svg viewBox="0 0 20 16" className="absolute -right-2 -top-2 h-5 w-6 text-slate-950" fill="none">
                <path d="M3 8 1 5M9 5V1M15 8l3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            </span>
          </div>
        </div>
      </section>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-blue-600">Frequently Asked Questions</p>
          <h2 className="mt-3 text-center text-3xl font-bold tracking-tight">Partnership questions</h2>
          <div className="mt-9 divide-y divide-slate-200 rounded-2xl border border-slate-200 px-6 sm:px-8">
            <details className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold">
                How can Homezai create value for MLS members?
                <span className="text-2xl font-light text-blue-600 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="pt-4 leading-7 text-slate-600">
                Homezai can connect listing engagement, showing scheduling, and buyer follow-up in an accessible workflow delivered as an MLS member benefit.
              </p>
            </details>
            <details className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold">
                What MLS integrations are available?
                <span className="text-2xl font-light text-blue-600 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="pt-4 leading-7 text-slate-600">
                Current integrations are listed on the Homezai Integrations page. New opportunities are evaluated with each MLS and its technology requirements.
              </p>
            </details>
            <details className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold">
                How does Homezai support member adoption?
                <span className="text-2xl font-light text-blue-600 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="pt-4 leading-7 text-slate-600">
                Partnership planning can include rollout guidance, activation around a member’s first listing, and workflow education aligned with the MLS.
              </p>
            </details>
          </div>
        </div>
      </section>
      <section className="bg-slate-950 px-4 py-20 text-center text-white sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Explore what we can build together</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Tell us about your organization, technology, and goals for the showing experience.
          </p>
          <a href="mailto:Info@Homezai.com?subject=Homezai%20MLS%20partnership%20inquiry" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-950">
            Partnership Inquiry
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-5 w-5" aria-hidden="true">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  )
}
