import { trackCtaClick } from '../../analytics'
import { Link } from 'react-router-dom'

import { integrationCategories } from '../../integrationsData.js'

/*
 * The cards come from src/integrationsData.js, the same list the page has always
 * published. The design sizes each logo box to suit the artwork, so those sizes are
 * kept here by card name; a new card falls back to the standard box.
 */
const LOGO_SIZES = {
  "MLS of Greater Cincinnati (CincyMLS)": 'h-12 w-[78px]',
  "Houston Association of REALTORS® (HAR)": 'h-12 w-12',
  "Coconut Coast Organization of REALTORS®": 'h-10 w-[86px]',
  "Baldwin County Association of REALTORS®": 'h-11 w-[78px]',
  "Gulf Coast MLS - Mobile Area Association of REALTORS®": 'h-11 w-[86px]',
  "San Diego MLS (SDMLS)": 'h-8 w-[88px]',
  "California Regional Multiple Listing Service (CRMLS)": 'h-10 w-[88px]',
  "Midwest Real Estate Data (MRED)": 'h-9 w-[88px]',
  "Bridge Interactive": 'h-12 w-[88px]',
  "RealtyFeed": 'h-12 w-[88px]',
  "Rapattoni MLS": 'h-12 w-[88px]',
  "REcore": 'h-12 w-[88px]',
  "MLS Grid": 'h-12 w-[88px]',
  "Google Calendar": 'h-9 w-9',
  "eXp Realty (BoldTrail)": 'h-12 w-[82px]',
  "Berkshire Hathaway HomeServices (BoldTrail)": 'h-10 w-[82px]',
  "Weichert Realtors (BoldTrail)": 'h-10 w-10',
  "RE/MAX (BoldTrail)": 'h-8 w-[92px]',
  "BoldTrail (Inside Real Estate)": 'h-7 w-[82px]',
  "Facebook (Meta)": 'h-9 w-9',
  "Instagram (Meta)": 'h-9 w-9',
  "LinkedIn (Microsoft)": 'h-9 w-9',
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

export default function IntegrationsPage() {
  return (
    <main id="main-content" tabIndex="-1">
      <section className="border-b border-blue-50 bg-[linear-gradient(180deg,#f1f7ff_0%,#ffffff_100%)] px-5 pb-20 pt-20 sm:pb-24 sm:pt-24">
        <div className="mx-auto grid max-w-[1000px] gap-10 lg:grid-cols-[0.58fr_0.42fr] lg:items-center">
          <div className="text-center lg:text-left">
            <p className="mb-7 inline-flex rounded-full border border-blue-200 bg-white/70 px-3 py-1.5 text-[10px] font-medium text-blue-600 shadow-sm">
              Seamless Integrations
            </p>
            <h1 className="text-[32px] font-extrabold leading-tight tracking-[-0.035em] text-[#111827] sm:text-[38px]">Connect Homezai with Your Favorite Tools</h1>
            <p className="mx-auto mt-5 max-w-[600px] text-[13px] leading-6 text-slate-500 sm:text-[14px]">
              Homezai integrates seamlessly with the tools you already use. Streamline your workflow and maximize productivity with our comprehensive integration ecosystem.
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-[11px] font-semibold text-slate-700">
              <span className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white py-2 pl-2 pr-4 shadow-sm">
                <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 h-9 w-9 rounded-xl" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-7 w-7 h-4 w-4">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <svg viewBox="0 0 20 16" className="absolute -right-2 -top-2 h-5 w-6 text-slate-950" fill="none">
                    <path d="M3 8 1 5M9 5V1M15 8l3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  </svg>
                </span>
                Easy Setup
              </span>
              <span className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white py-2 pl-2 pr-4 shadow-sm">
                <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 h-9 w-9 rounded-xl" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-refresh-cw h-7 w-7 h-4 w-4">
                    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                    <path d="M21 3v5h-5" />
                    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                    <path d="M8 16H3v5" />
                  </svg>
                  <svg viewBox="0 0 20 16" className="absolute -right-2 -top-2 h-5 w-6 text-slate-950" fill="none">
                    <path d="M3 8 1 5M9 5V1M15 8l3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  </svg>
                </span>
                Real-time Sync
              </span>
              <span className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white py-2 pl-2 pr-4 shadow-sm">
                <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 h-9 w-9 rounded-xl" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check h-7 w-7 h-4 w-4">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <svg viewBox="0 0 20 16" className="absolute -right-2 -top-2 h-5 w-6 text-slate-950" fill="none">
                    <path d="M3 8 1 5M9 5V1M15 8l3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  </svg>
                </span>
                {"Secure & Reliable"}
              </span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border p-4 shadow-xl border-blue-100 bg-white/85 shadow-blue-950/5 ">
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-blue-200/40 blur-2xl" aria-hidden="true" />
            <svg viewBox="0 0 360 250" className="relative h-auto w-full" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Real estate professional working on a laptop">
              <path d="M251 62c52 1 88 40 78 86-8 38-48 69-96 67-45-2-76-32-69-70 8-43 39-84 87-83Z" fill="#E7F1FF" />
              <path d="M80 217c6-35 17-61 42-73m0 0c-9-9-14-23-11-38 4-23 25-38 47-34 20 4 34 23 31 43-2 14-10 25-21 32m-46-3c12 11 31 12 46 3m-46-3c-5 16-4 39 3 73m43-70c11 11 19 30 22 52" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M112 104c-17-8-21-30-7-43 12-11 34-8 42 6 8-11 29-9 35 5 18 2 26 26 12 39-5-19-17-31-36-36-6 18-22 28-46 29Z" fill="#111827" />
              <path d="m179 169 94 4-18 45h-99l23-49Z" fill="white" stroke="#0F172A" strokeWidth="4" strokeLinejoin="round" />
              <path d="M214 192v14m-7-7h14M208 193l6-5 6 5" stroke="#246BFD" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M67 218h224" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
              <path d="m214 44-2-19m18 23 10-16m5 29 18-7" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </section>
      <section className="bg-white px-5 py-20 sm:py-24">
        <div className="integrations-list mx-auto max-w-[1000px] space-y-12">
          {integrationCategories.map((category) => {
            const headingId = slugify(category.name)
            const count = category.items.length
            return (
              <section key={category.name} className="integration-category" aria-labelledby={headingId}>
                <div className="mb-4 flex items-end justify-between gap-4 border-b border-slate-200 pb-3">
                  <div>
                    <h2 id={headingId} className="text-[16px] font-bold tracking-[-0.015em] text-slate-950">{category.name}</h2>
                  </div>
                  <p className="category-count shrink-0 text-[10px] text-slate-500">
                    {`${count} ${count === 1 ? 'integration' : 'integrations'} available`}
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((item) => (
                    <article key={item.name} className="integration-card group flex min-h-[88px] items-center rounded-md border border-slate-200 bg-white px-5 py-4 shadow-[0_2px_8px_rgba(15,23,42,0.035)] transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_8px_22px_rgba(15,23,42,0.08)]">
                      <div className="flex w-[92px] shrink-0 items-center justify-center pr-5">
                        <img src={item.logo} alt={item.logoAlt} className={`${LOGO_SIZES[item.name] || 'h-12 w-[88px]'} object-contain`} />
                      </div>
                      <div className="min-w-0 border-l border-slate-100 pl-4">
                        <h3 className="text-[11px] font-bold leading-[1.35] text-slate-900">{item.name}</h3>
                        <p className="mt-1 text-[9px] leading-4 text-slate-500">{item.desc}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </section>
      <section className="integrations-cta bg-[#172038] px-5 py-20 text-white">
        <div className="mx-auto max-w-[620px] text-center">
          <h2 className="text-[28px] font-extrabold tracking-[-0.025em] sm:text-[32px]">Need a Custom Integration?</h2>
          <p className="mx-auto mt-5 max-w-[500px] text-[12px] leading-5 text-slate-300">
            Our team can work with you to build custom integrations tailored to your specific needs.
          </p>
          <div className="mt-9 flex flex-col justify-center sm:flex-row">
            <Link to="/try-now" onClick={() => trackCtaClick('try_now_click', 'integrations_cta')} className="rounded-t-md bg-white px-7 py-3 text-[11px] font-semibold text-blue-600 transition-colors hover:bg-blue-50 sm:rounded-l-md sm:rounded-tr-none">
              Try Now
            </Link>
            <a href="mailto:Info@Homezai.com" onClick={() => trackCtaClick('contact_click', 'integrations_cta')} className="rounded-b-md border border-white/70 px-7 py-3 text-[11px] font-semibold text-white transition-colors hover:bg-white/10 sm:rounded-r-md sm:rounded-bl-none">
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
