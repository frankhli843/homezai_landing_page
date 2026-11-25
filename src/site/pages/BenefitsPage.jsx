import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HOMEZAI_WORDMARK } from '../../brand.js'

const DEMO_TABS = [
  { label: 'Add a listing', title: 'Add or select the listing you want to activate', description: 'Start with a property address and prepare the listing for a connected Homezai workflow.', checklist: 'Listing selected' },
  { label: 'Share', title: 'Share the listing through your marketing channels', description: 'Connect listing discovery to a branded path where interested buyers can take the next step.', checklist: 'Share link prepared' },
  { label: 'Schedule', title: 'Give buyers an easier scheduling experience', description: 'Buyers can choose an available showing time without unnecessary scheduling back-and-forth.', checklist: 'Buyer scheduling experience ready' },
  { label: 'Notify', title: 'Stay informed when showing activity happens', description: 'Homezai organizes showing requests and notifications so the right next step is clear.', checklist: 'Showing notification organized' },
  { label: 'Engage', title: 'Keep buyer engagement and follow-up moving', description: 'Review showing activity and continue the conversation with organized follow-up information.', checklist: 'Follow-up activity prepared' },
]

function PlayIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play h-4 w-4 fill-current" aria-hidden="true">
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export default function BenefitsPage() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <main id="main-content" tabIndex="-1">
      <section className="bg-gradient-to-b from-blue-50 via-white to-white px-4 pb-16 pt-20 text-center sm:px-6 sm:pb-20 sm:pt-24 lg:px-8">
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
              Homezai Benefits
            </p>
            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">Every Listing Deserves More Opportunity.</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {"Discover how Homezai helps real estate professionals connect listing marketing, showing scheduling, and buyer engagement. All with "}
              <strong className="font-bold text-slate-800">no cost per lead</strong>
              .
            </p>
            <Link to="/try-now" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 font-bold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
              TRY NOW
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-5 w-5" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border p-4 shadow-xl border-blue-100 bg-white/85 shadow-blue-950/5 ">
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-blue-200/40 blur-2xl" aria-hidden="true" />
            <svg viewBox="0 0 360 230" className="relative h-auto w-full" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A home listing">
              <path d="M237 24c51 0 88 34 86 79-2 44-40 78-91 79-52 1-86-30-84-74 2-46 39-84 89-84Z" fill="#E7F1FF" />
              <path d="m58 116 120-92 122 92v92H58v-92Z" fill="white" stroke="#0F172A" strokeWidth="5" strokeLinejoin="round" />
              <path d="M144 208v-70h68v70M83 208v-46h36v46M237 138h38v38h-38z" stroke="#0F172A" strokeWidth="5" />
              <path d="M35 208h290" stroke="#0F172A" strokeWidth="5" strokeLinecap="round" />
              <path d="M89 178c-25-7-31-33-14-49 16 2 27 12 28 28 8-8 18-10 28-5 1 16-9 27-27 30" fill="#E7F1FF" stroke="#0F172A" strokeWidth="4" strokeLinejoin="round" />
              <path d="M104 156v52" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
              <path d="m270 40 1-19m17 24 11-15m2 31 18-6" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </section>
      <section id="virtual-demo" className="scroll-mt-24 px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Virtual Product Demo</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">See Homezai in Action.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">Watch how a listing can move from social discovery to a showing request.</p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-blue-950/10">
            <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-4">
              <div className="flex items-center gap-3">
                <img src={HOMEZAI_WORDMARK} alt="" className="h-5 w-auto" />
                <span className="hidden h-5 w-px bg-slate-300 sm:block" aria-hidden="true" />
                <span className="hidden text-sm font-medium text-slate-500 sm:inline">Showing workspace</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
                Live workflow
              </div>
            </div>
            <div className="grid lg:grid-cols-[0.42fr_0.58fr]">
              <div className="border-b border-slate-200 bg-slate-950 p-6 text-white lg:border-b-0 lg:border-r lg:border-slate-800 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-300">Virtual product demo</p>
                <h3 className="mt-4 text-2xl font-bold leading-tight">{DEMO_TABS[activeTab].title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">{DEMO_TABS[activeTab].description}</p>
                <div className="mt-8 grid gap-2">
                  {DEMO_TABS.map((item, index) => {
                    const selected = index === activeTab
                    return (
                      <button
                        key={item.label}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => setActiveTab(index)}
                        className={`flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold transition-colors ${selected ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-300 hover:bg-slate-800'}`}
                      >
                        <span className="flex items-center gap-3">
                          <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${selected ? 'bg-white/20' : 'bg-slate-800'}`}>{index + 1}</span>
                          {item.label}
                        </span>
                        {selected ? <PlayIcon /> : null}
                      </button>
                    )
                  })}
                </div>
              </div>
              <div className="bg-slate-100 p-5 sm:p-8">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                  <div className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-center">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Showing request</p>
                      <h4 className="mt-1 text-lg font-bold text-slate-950">Saturday home tour</h4>
                    </div>
                    <span className="w-fit rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">AI coordinating</span>
                  </div>
                  <div className="grid gap-3 py-5 sm:grid-cols-3">
                    <div className="rounded-xl bg-slate-50 p-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days h-5 w-5 text-blue-600" aria-hidden="true">
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
                      <p className="mt-3 text-xs font-medium text-slate-400">Date</p>
                      <p className="mt-1 text-sm font-bold text-slate-800">Saturday, May 17</p>
                    </div>
                    <div className="rounded-xl bg-slate-50 p-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock3 lucide-clock-3 h-5 w-5 text-blue-600" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16.5 12" />
                      </svg>
                      <p className="mt-3 text-xs font-medium text-slate-400">Window</p>
                      <p className="mt-1 text-sm font-bold text-slate-800">10:00 AM–1:00 PM</p>
                    </div>
                    <div className="rounded-xl bg-slate-50 p-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin h-5 w-5 text-blue-600" aria-hidden="true">
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <p className="mt-3 text-xs font-medium text-slate-400">Route</p>
                      <p className="mt-1 text-sm font-bold text-slate-800">3 homes · 8.4 mi</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {DEMO_TABS.map((item, index) => (
                      <div key={item.label} className="flex items-center gap-3 rounded-lg border border-slate-100 px-4 py-3">
                        <span className={`flex h-6 w-6 items-center justify-center rounded-full ${index <= activeTab ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-400'}`}>
                          <CheckIcon />
                        </span>
                        <span className="text-sm font-medium text-slate-700">{item.checklist}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-9 text-center">
            <Link to="/try-now" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
              TRY NOW
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-5 w-5" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <p className="mt-3 text-sm text-slate-500">See how Homezai can fit your showing workflow.</p>
          </div>
        </div>
      </section>
      <div>
        <section id="generate-leads" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 bg-slate-50">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center ">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Listing-Based Lead Generation</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Convert listing attention into real buyer showings</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Embed a branded booking experience across listing pages and social channels so interested buyers can take the next step while intent is high.
              </p>
              <ul className="mt-7 space-y-3">
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="font-medium leading-6">Capture requests around the clock</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="font-medium leading-6">Keep the experience under your brand</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="font-medium leading-6">Route opportunities to the right professional</span>
                </li>
              </ul>
            </div>
            <div className="flex min-h-80 items-center justify-center rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 shadow-sm">
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
        <section id="showing-scheduling" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 bg-white">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:[&>*:first-child]:order-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Showing Scheduling</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Make it easier for buyers to take the next step</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Create a straightforward scheduling experience that connects buyer interest with available showing opportunities.
              </p>
              <ul className="mt-7 space-y-3">
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="font-medium leading-6">Present clear scheduling options</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="font-medium leading-6">Reduce repetitive coordination</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="font-medium leading-6">Keep appointment information organized</span>
                </li>
              </ul>
            </div>
            <div className="flex min-h-80 items-center justify-center rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 shadow-sm">
              <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 h-36 w-36 rounded-[2rem]" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days h-7 w-7 h-16 w-16">
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
            </div>
          </div>
        </section>
        <section id="ai-workflows" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 bg-slate-50">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center ">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">AI Augmented Workflows</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Move from request to confirmed showing with less coordination</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Homezai uses AI to manage the repetitive details behind appointments, calendars, property access, and multi-home routes.
              </p>
              <ul className="mt-7 space-y-3">
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="font-medium leading-6">Coordinate availability automatically</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="font-medium leading-6">Reduce scheduling back-and-forth</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="font-medium leading-6">Organize complex showing journeys</span>
                </li>
              </ul>
            </div>
            <div className="flex min-h-80 items-center justify-center rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 shadow-sm">
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
        <section id="buyer-engagement" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 bg-white">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:[&>*:first-child]:order-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Buyer Engagement</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Deliver timely communication before and after every tour</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Keep buyers informed with a consistent showing experience while giving agents more context for meaningful follow-up.
              </p>
              <ul className="mt-7 space-y-3">
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="font-medium leading-6">Send clear appointment updates</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="font-medium leading-6">Maintain momentum after showings</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="font-medium leading-6">Create a more responsive buyer experience</span>
                </li>
              </ul>
            </div>
            <div className="flex min-h-80 items-center justify-center rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 shadow-sm">
              <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 h-36 w-36 rounded-[2rem]" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-text h-7 w-7 h-16 w-16">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  <path d="M13 8H7" />
                  <path d="M17 12H7" />
                </svg>
                <svg viewBox="0 0 20 16" className="absolute -right-2 -top-2 h-5 w-6 text-slate-950" fill="none">
                  <path d="M3 8 1 5M9 5V1M15 8l3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </span>
            </div>
          </div>
        </section>
        <section id="listing-analytics" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 bg-slate-50">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center ">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Reporting and Analytics</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">See how showing activity translates into listing insight</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Understand appointment demand, buyer activity, and showing patterns in one place so teams can make better-informed decisions.
              </p>
              <ul className="mt-7 space-y-3">
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="font-medium leading-6">Track showing interest over time</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="font-medium leading-6">Identify activity patterns</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="font-medium leading-6">Share clearer performance signals</span>
                </li>
              </ul>
            </div>
            <div className="flex min-h-80 items-center justify-center rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 shadow-sm">
              <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 h-36 w-36 rounded-[2rem]" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-column h-7 w-7 h-16 w-16">
                  <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                  <path d="M18 17V9" />
                  <path d="M13 17V5" />
                  <path d="M8 17v-3" />
                </svg>
                <svg viewBox="0 0 20 16" className="absolute -right-2 -top-2 h-5 w-6 text-slate-950" fill="none">
                  <path d="M3 8 1 5M9 5V1M15 8l3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </span>
            </div>
          </div>
        </section>
        <section id="data-privacy" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 bg-white">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:[&>*:first-child]:order-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Privacy and Data Control</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Keep ownership of your brand, relationships, and data</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Homezai is designed to support your organization—not replace its identity. Your customer relationships and operational data remain yours.
              </p>
              <ul className="mt-7 space-y-3">
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="font-medium leading-6">Customer data stays under your control</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="font-medium leading-6">White-label experiences protect your brand</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="font-medium leading-6">Integrations support existing systems</span>
                </li>
              </ul>
            </div>
            <div className="flex min-h-80 items-center justify-center rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 shadow-sm">
              <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 h-36 w-36 rounded-[2rem]" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check h-7 w-7 h-16 w-16">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <svg viewBox="0 0 20 16" className="absolute -right-2 -top-2 h-5 w-6 text-slate-950" fill="none">
                  <path d="M3 8 1 5M9 5V1M15 8l3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </span>
            </div>
          </div>
        </section>
      </div>
      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8" aria-labelledby="benefits-faq-heading">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Frequently Asked Questions</p>
            <h2 id="benefits-faq-heading" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Questions about Homezai benefits</h2>
          </div>
          <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 px-6 shadow-sm sm:px-8">
            <details className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                What is Homezai?
                <span className="text-2xl font-light text-blue-600 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="max-w-3xl pt-4 leading-7 text-slate-600">
                Homezai is AI augmented real estate showing software that connects listing marketing, showing scheduling, buyer engagement, and follow-up workflows.
              </p>
            </details>
            <details className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                How does the virtual product demo work?
                <span className="text-2xl font-light text-blue-600 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="max-w-3xl pt-4 leading-7 text-slate-600">
                Select each guided step to see how a listing moves from activation and sharing to buyer scheduling, notifications, and follow-up activity.
              </p>
            </details>
            <details className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                How do I start with my first listing?
                <span className="text-2xl font-light text-blue-600 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="max-w-3xl pt-4 leading-7 text-slate-600">
                Select Try Now, enter the property address, and choose the first workflow you want to activate. Your first listing is at no cost.
              </p>
            </details>
            <details className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                Can Homezai work with my existing real estate tools?
                <span className="text-2xl font-light text-blue-600 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="max-w-3xl pt-4 leading-7 text-slate-600">
                Homezai supports a growing set of MLS, calendar, CRM, roster, and marketing integrations. Visit the Integrations page for the current list.
              </p>
            </details>
            <details className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                How does Homezai approach privacy and data control?
                <span className="text-2xl font-light text-blue-600 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="max-w-3xl pt-4 leading-7 text-slate-600">
                Homezai is built around clear data practices, transparency, and customer control. Review the Privacy Policy for current detailed information.
              </p>
            </details>
          </div>
        </div>
      </section>
      <section className="bg-slate-950 px-4 py-20 text-center text-white sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Make the next showing easier</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Discover how Homezai can support agents, brokerages, MLSs, and associations with an intelligent showing experience.
          </p>
          <Link to="/try-now" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-950">
            TRY NOW — START WITH YOUR FIRST LISTING
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
