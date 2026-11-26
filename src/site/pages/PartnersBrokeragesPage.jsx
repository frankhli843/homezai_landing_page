import { trackCtaClick } from '../../analytics'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const MORE_INNOVATORS = [
  { name: 'Weichert Realtors R.E. 1790', logo: '/images/site/innovator-weichert-realtors-1790.png' },
  { name: 'Domain Realty', logo: '/images/site/innovator-domain-realty.png' },
  { name: 'Knipe Realty', logo: '/images/site/innovator-knipe-realty.png' },
]

export default function PartnersBrokeragesPage() {
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
              Brokerage Partners
            </p>
            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block">Help Your Agents</span>
              <span className="block">
                {"Turn More Listings Into "}
                <span className="text-[#0F76EC]">Opportunities.</span>
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Give agents an intelligent, branded workflow that improves adoption, protects customer relationships, and creates clearer operational insight.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/contact" onClick={() => trackCtaClick('contact_click', 'brokerage_hero')} className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                Explore Brokerage Partnership
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
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-blue-100/70 via-white to-amber-50/70 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-6 shadow-xl shadow-blue-950/10 sm:p-8">
              <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-blue-600">Featured Brokerage Partner</p>
              <div className="mt-5 flex min-h-52 items-center justify-center rounded-2xl border border-slate-100 bg-white px-4 py-8">
                <img src="/images/site/innovate-realty-featured-partner.png" alt="Innovate Realty" className="h-auto w-full max-w-[480px] object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-y border-blue-100 bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Real Estate Brokerages</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">Board of Innovators</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              A growing group of forward-looking brokerage brands helping shape better real estate experiences.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-3 gap-4">
            <div className="flex min-h-32 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <img src="/images/site/innovator-innovate-realty.png" alt="Innovate Realty" className="h-auto w-auto max-h-20 max-w-full object-contain" />
            </div>
            <div className="flex min-h-32 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <img src="/images/site/innovator-century-21-affiliated.png" alt="Century 21 Affiliated" className="h-auto w-auto max-h-20 max-w-full object-contain" />
            </div>
            <div className="flex min-h-32 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <img src="/images/site/innovator-pacific-real-estate-center.png" alt="Pacific Real Estate Center" className="h-auto w-auto max-h-20 max-w-full object-contain" />
            </div>
            <div className="flex min-h-32 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <img src="/images/site/innovator-chi-group-real-estate.png" alt="CHI Group Real Estate" className="h-auto w-auto max-h-20 max-w-full object-contain" />
            </div>
            <div className="flex min-h-32 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <img src="/images/site/innovator-port-city-realty.png" alt="Port City Realty" className="h-auto w-auto max-h-20 max-w-full object-contain" />
            </div>
            <div className="flex min-h-32 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <img src="/images/site/innovator-txr-homes.png" alt="TXR Homes" className="h-auto w-auto max-h-20 max-w-full object-contain" />
            </div>
            {expanded
              ? MORE_INNOVATORS.map((brand) => (
                  <div key={brand.name} className="flex min-h-32 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                    <img src={brand.logo} alt={brand.name} className="h-auto w-auto max-h-20 max-w-full object-contain" />
                  </div>
                ))
              : null}
          </div>
          <div className="mt-8 text-center">
            <button type="button" aria-expanded={expanded} onClick={() => setExpanded((value) => !value)} className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-white px-5 py-3 font-semibold text-blue-700 shadow-sm transition-colors hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
              {expanded ? 'Show fewer innovators' : 'Show more innovators'}
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
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Brokerage-Wide Benefits</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Deliver a consistent showing experience across the organization</h2>
            <p className="mt-6 whitespace-pre-line text-lg leading-8 text-slate-600">
              Homezai helps brokerages equip agents with one branded experience for generating opportunities and coordinating showings.
            </p>
            <ul className="mt-7 space-y-3">
              <li className="flex items-start gap-3 text-slate-700">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span className="font-medium leading-6">Brokerage-branded buyer experience</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span className="font-medium leading-6">Scalable workflows for teams and offices</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span className="font-medium leading-6">Customer and data control</span>
              </li>
            </ul>
          </div>
          <div className="flex min-h-80 items-center justify-center rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white shadow-sm">
            <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 h-36 w-36 rounded-[2rem]" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building2 lucide-building-2 h-7 w-7 h-16 w-16">
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
        </div>
      </section>
      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8 bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:[&>*:first-child]:order-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Agent Adoption and Engagement</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Make powerful technology easier for agents to use</h2>
            <p className="mt-6 whitespace-pre-line text-lg leading-8 text-slate-600">
              Simple, practical workflows reduce friction and give agents immediate value in the moments surrounding a showing.
            </p>
            <ul className="mt-7 space-y-3">
              <li className="flex items-start gap-3 text-slate-700">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span className="font-medium leading-6">Clear activation around the first listing</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span className="font-medium leading-6">Fewer repetitive coordination tasks</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span className="font-medium leading-6">Workflows designed around agent priorities</span>
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
      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8 bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center ">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Reporting and Workflow Advantages</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Understand activity while improving daily execution</h2>
            <p className="mt-6 whitespace-pre-line text-lg leading-8 text-slate-600">
              Connect showing activity with organization-level visibility so leaders can support adoption and improve operational consistency.
            </p>
            <ul className="mt-7 space-y-3">
              <li className="flex items-start gap-3 text-slate-700">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span className="font-medium leading-6">Listing and showing activity signals</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span className="font-medium leading-6">Workflow visibility across teams</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span className="font-medium leading-6">Integration with existing technology</span>
              </li>
            </ul>
          </div>
          <div className="flex min-h-80 items-center justify-center rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white shadow-sm">
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
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-blue-600">Frequently Asked Questions</p>
          <h2 className="mt-3 text-center text-3xl font-bold tracking-tight">Partnership questions</h2>
          <div className="mt-9 divide-y divide-slate-200 rounded-2xl border border-slate-200 px-6 sm:px-8">
            <details className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold">
                How does Homezai support agent adoption?
                <span className="text-2xl font-light text-blue-600 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="pt-4 leading-7 text-slate-600">
                Homezai centers activation on a familiar agent asset—the listing—and guides professionals from sharing through showing coordination and follow-up.
              </p>
            </details>
            <details className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold">
                Can a brokerage maintain its brand?
                <span className="text-2xl font-light text-blue-600 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="pt-4 leading-7 text-slate-600">
                Homezai supports branded experiences for qualifying organizational implementations. Final packaging is confirmed during partnership planning.
              </p>
            </details>
            <details className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold">
                What reporting can brokerage leaders access?
                <span className="text-2xl font-light text-blue-600 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="pt-4 leading-7 text-slate-600">
                Planned reporting focuses on listing, showing, engagement, and workflow activity. Available reporting depends on the final implementation.
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
          <a href="mailto:Info@Homezai.com?subject=Homezai%20brokerage%20partnership%20inquiry" onClick={() => trackCtaClick('contact_click', 'brokerage_cta')} className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-950">
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
