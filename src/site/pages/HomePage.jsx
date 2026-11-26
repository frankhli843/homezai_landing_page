import { trackCtaClick } from '../../analytics'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <main id="main-content" tabIndex="-1">
      <section className="overflow-hidden bg-white px-8 pb-14 pt-8 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="mx-auto max-w-3xl">
          <div>
            <p className="leading-none">
              <span className="block text-sm font-extrabold uppercase tracking-[0.2em] text-[#0F76EC] sm:text-base">AI Augmented</span>
              <span className="mt-3 block text-lg font-bold tracking-tight text-slate-950 sm:text-2xl">Real Estate Showing Software</span>
            </p>
            <h1 className="mt-8 text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-slate-950 sm:text-7xl">
              <span className="block">From Social</span>
              <span className="block">Scrolls to</span>
              <span className="block text-[#0F76EC]">Showings.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-[1.05rem] font-medium leading-7 text-slate-700 sm:mt-8 sm:text-xl sm:leading-9">
              Meet customers where they already are and turn interest into showings with AI-augmented workflows.
            </p>
          </div>
          <div className="mx-auto mt-6 w-full max-w-[18rem] sm:mt-10 sm:max-w-lg">
            <img src="/images/site/social-to-showings-person.png" alt="Real estate professional working at a laptop" className="h-auto w-full" />
          </div>
          <div className="mt-4 sm:mt-8">
            <Link to="/try-now" onClick={() => trackCtaClick('try_now_click', 'hero')} className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#0F76EC] px-8 py-4 text-lg font-bold text-white shadow-md shadow-blue-600/20 transition-all hover:bg-[#0C3D8A] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0F76EC] focus:ring-offset-2">
              Try Homezai
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-5 w-5" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <a href="#how-it-works" className="mt-4 flex items-center justify-center gap-3 text-base font-bold text-[#0C3D8A] transition-colors hover:text-[#0F76EC] sm:mt-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#0F76EC] text-[#0F76EC]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play ml-0.5 h-4 w-4 fill-current" aria-hidden="true">
                  <polygon points="6 3 20 12 6 21 6 3" />
                </svg>
              </span>
              See How It Works
            </a>
          </div>
        </div>
      </section>
      <section id="how-it-works" className="scroll-mt-24 border-y border-slate-200 bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">How It Works</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
              <span className="block">One Listing.</span>
              <span className="block">
                <span className="text-blue-600">More</span>
                {" Opportunities."}
              </span>
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              <span className="block">From the first social click to the next showing,</span>
              <span className="block">Homezai makes it easier to connect buyers with your listings.</span>
            </p>
          </div>
          <ol className="mx-auto mt-10 grid max-w-[520px] gap-3">
            <li className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm">
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send h-6 w-6" aria-hidden="true">
                  <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                  <path d="m21.854 2.147-10.94 10.939" />
                </svg>
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-[11px] font-bold text-white">1</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-950">Share Your Listing</h3>
                <p className="mt-1 text-sm leading-5 text-slate-600">Post to social, open house materials, or your website.</p>
              </div>
            </li>
            <li className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm">
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days h-6 w-6" aria-hidden="true">
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
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-[11px] font-bold text-white">2</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-950">Buyers Schedule</h3>
                <p className="mt-1 text-sm leading-5 text-slate-600">Interested buyers book a showing in a few clicks.</p>
              </div>
            </li>
            <li className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm">
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell h-6 w-6" aria-hidden="true">
                  <path d="M10.268 21a2 2 0 0 0 3.464 0" />
                  <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
                </svg>
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-[11px] font-bold text-white">3</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-950">You Get Notified</h3>
                <p className="mt-1 text-sm leading-5 text-slate-600">Stay updated in real time with buyer activity.</p>
              </div>
            </li>
            <li className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm">
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-column h-6 w-6" aria-hidden="true">
                  <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                  <path d="M18 17V9" />
                  <path d="M13 17V5" />
                  <path d="M8 17v-3" />
                </svg>
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-[11px] font-bold text-white">4</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-950">{"Follow Up & Close"}</h3>
                <p className="mt-1 text-sm leading-5 text-slate-600">Use AI insights to keep conversations moving.</p>
              </div>
            </li>
          </ol>
          <div className="mt-12 text-center">
            <Link to="/try-now" onClick={() => trackCtaClick('try_now_click', 'how_it_works')} className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-blue-700">
              TRY NOW — YOUR FIRST LISTING IS AT NO COST
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      <section className="overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-50 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-blue-600">The Social Opportunity</p>
          <div className="mx-auto mt-8 max-w-4xl text-center">
            <h2 className="font-bold leading-tight tracking-tight text-slate-950">
              <span className="block text-4xl sm:text-5xl">Buyers are online.</span>
              <span className="mt-4 block text-2xl sm:text-3xl">
                {"Real estate professionals need a "}
                <span className="text-blue-600">direct path</span>
                {" to the conversation."}
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
              Current industry research points to a clear connection between digital presence, consumer communication, and lead generation.
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-2">
            <article className="rounded-3xl border p-6 shadow-sm border-blue-200 bg-blue-600 text-white">
              <p className="text-5xl font-black tracking-tight text-white">39%</p>
              <p className="mt-5 text-base font-semibold leading-7 text-blue-50">of REALTORS® identified social media as their top lead-generating technology.</p>
              <div className="mt-7 border-t pt-4 text-xs border-blue-400 text-blue-100">
                <cite className="not-italic font-bold">NAR, 2025</cite>
                <span className="mx-2" aria-hidden="true">·</span>
                <span>NAR</span>
              </div>
            </article>
            <article className="rounded-3xl border p-6 shadow-sm border-slate-200 bg-white text-slate-950">
              <p className="text-5xl font-black tracking-tight text-blue-600">52%</p>
              <p className="mt-5 text-base font-semibold leading-7 text-slate-700">of actual buyers found the home they purchased on the internet.</p>
              <div className="mt-7 border-t pt-4 text-xs border-slate-200 text-slate-500">
                <cite className="not-italic font-bold">NAR, 2025</cite>
                <span className="mx-2" aria-hidden="true">·</span>
                <span>CDAR Online</span>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section id="features" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.62fr_0.38fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Core Benefits</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
                <span className="block">Your Listings. Your Brand.</span>
                <span className="block">
                  <span className="text-blue-600">Your Leads.</span>
                  {" Your Business."}
                </span>
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                {"Turn your social media listings into real business, "}
                <strong className="font-bold text-slate-800">without paying per lead</strong>
                .
              </p>
            </div>
            <img src="/images/site/your-listings-your-brand.png" alt="Homezai illustration representing listings and brand ownership" className="mx-auto h-auto w-full max-w-sm" />
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
              <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 " aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link2 lucide-link-2 h-7 w-7">
                  <path d="M9 17H7A5 5 0 0 1 7 7h2" />
                  <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
                  <line x1="8" x2="16" y1="12" y2="12" />
                </svg>
                <svg viewBox="0 0 20 16" className="absolute -right-2 -top-2 h-5 w-6 text-slate-950" fill="none">
                  <path d="M3 8 1 5M9 5V1M15 8l3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </span>
              <h3 className="mt-7 text-xl font-bold text-slate-950">Own Your Leads</h3>
              <p className="mt-3 leading-7 text-slate-600">Turn your own listing content into direct buyer engagement opportunities.</p>
              <div className="mt-auto pt-7">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">Homezai workflow</span>
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  </div>
                  <p className="mt-3 text-sm font-bold text-slate-800">12 new listing interactions</p>
                </div>
              </div>
            </article>
            <article className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
              <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 " aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days h-7 w-7">
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
              <h3 className="mt-7 text-xl font-bold text-slate-950">Simplify Showings</h3>
              <p className="mt-3 leading-7 text-slate-600">Reduce scheduling friction and make it easier to take the next step.</p>
              <div className="mt-auto pt-7">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">Homezai workflow</span>
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  </div>
                  <p className="mt-3 text-sm font-bold text-slate-800">Saturday · 10:30 AM</p>
                </div>
              </div>
            </article>
            <article className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
              <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 " aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles h-7 w-7">
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
              <h3 className="mt-7 text-xl font-bold text-slate-950">Let AI Assist</h3>
              <p className="mt-3 leading-7 text-slate-600">Organize showing information, buyer activity, and actionable next steps.</p>
              <div className="mt-auto pt-7">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">Homezai workflow</span>
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  </div>
                  <p className="mt-3 text-sm font-bold text-slate-800">Next step ready</p>
                </div>
              </div>
            </article>
          </div>
          <Link to="/benefits#virtual-demo" className="mt-9 inline-flex items-center gap-2 font-bold text-blue-700 hover:text-blue-800">
            Explore All Benefits
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4" aria-hidden="true">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
      <section className="overflow-hidden bg-slate-950 px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-300">AI Operator</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Less Busywork. More Business.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">Your showing activity, buyer engagement, and next steps: all in one intelligent workflow.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link to="/try-now" onClick={() => trackCtaClick('try_now_click', 'cta_section')} className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 font-bold text-white hover:bg-blue-500">
                TRY NOW
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
              <Link to="/benefits#virtual-demo" className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 px-6 py-3.5 font-bold text-white hover:bg-slate-900">
                Watch the Virtual Demo
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play h-4 w-4 fill-current" aria-hidden="true">
                  <polygon points="6 3 20 12 6 21 6 3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-600 px-4 py-16 text-center text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border p-4 shadow-xl border-blue-100 bg-white/85 shadow-blue-950/5 mb-10 max-w-xs text-slate-950">
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-blue-200/40 blur-2xl" aria-hidden="true" />
            <svg viewBox="0 0 390 250" className="relative h-auto w-full" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A community of real estate professionals">
              <path d="M244 45c55-3 99 33 97 82-2 45-44 83-97 84-54 1-91-32-88-77 3-47 38-87 88-89Z" fill="#E7F1FF" />
              <path d="M169 90c0 24-17 43-39 43S90 114 90 90s17-43 40-43 39 19 39 43Zm65-15c0 28-18 50-42 50s-43-22-43-50 19-50 43-50 42 22 42 50Zm73 17c0 23-16 41-37 41s-37-18-37-41 16-42 37-42 37 19 37 42Z" fill="white" stroke="#0F172A" strokeWidth="4" />
              <path d="M90 89c-6-23 10-45 36-47 23-2 41 13 44 35-19 1-36-7-45-22-7 18-18 29-35 34Zm59-23c1-27 18-45 43-45 26 0 42 19 42 47-18-3-31-12-39-28-12 14-27 23-46 26Zm84 17c3-22 18-37 38-37 24 0 39 18 37 42-18-1-31-9-39-23-9 11-21 17-36 18Z" fill="#111827" />
              <path d="M55 220c5-49 30-78 75-78 31 0 53 15 65 43 12-28 37-43 75-43 42 0 66 29 70 78M195 185c-5-39-5-55-3-60" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
              <path d="m292 34 2-19m15 25 12-15m0 33 18-6" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            <span className="block">Ready to Turn Your Listings</span>
            <span className="block">Into Opportunities?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            <span className="block">See how Homezai can help you connect your listings</span>
            <span className="block">to showing requests and buyer engagement.</span>
          </p>
          <Link to="/try-now" onClick={() => trackCtaClick('try_now_click', 'closing_cta')} className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-bold text-blue-700 shadow-sm transition-all hover:bg-blue-50 hover:shadow-md">
            TRY NOW
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-5 w-5" aria-hidden="true">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
          <p className="mt-3 text-sm font-semibold text-blue-100">Start With Your First Listing — At No Cost.</p>
        </div>
      </section>
    </main>
  )
}
