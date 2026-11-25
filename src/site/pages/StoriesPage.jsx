import { Link } from 'react-router-dom'

export default function StoriesPage() {
  return (
    <main id="main-content" tabIndex="-1">
      <section className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-b from-blue-50 via-white to-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-200/30 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0F76EC]">Our Stories</p>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-[#0C3D8A] sm:text-6xl">Practical ideas for more human real estate technology.</h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            {"We're preparing useful perspectives on showing coordination, buyer engagement, and the everyday work of real estate professionals."}
          </p>
        </div>
      </section>
      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8" aria-labelledby="stories-status-heading">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-blue-100 bg-blue-50/70 p-8 sm:p-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#2C25A9] shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open h-6 w-6" aria-hidden="true">
                    <path d="M12 7v14" />
                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                  </svg>
                </div>
                <h2 id="stories-status-heading" className="mt-6 text-3xl font-semibold tracking-tight text-[#0C3D8A]">Our stories are coming soon.</h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  This is where Homezai will share stories, educational resources, and product guidance. In the meantime, the latest announcements and coverage are in our news.
                </p>
              </div>
              <Link to="/about" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#0F76EC] px-6 py-3.5 font-semibold text-white shadow-sm transition-colors hover:bg-[#0C3D8A] focus:outline-none focus:ring-2 focus:ring-[#0F76EC] focus:ring-offset-2">
                About Homezai
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-5 w-5" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <div id="industry-insights" className="scroll-mt-28 rounded-2xl border border-slate-200 p-7">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-no-axes-column-increasing h-6 w-6 text-[#0F76EC]" aria-hidden="true">
                <line x1="12" x2="12" y1="20" y2="10" />
                <line x1="18" x2="18" y1="20" y2="4" />
                <line x1="6" x2="6" y1="20" y2="16" />
              </svg>
              <h2 className="mt-5 text-xl font-semibold text-[#0C3D8A]">Industry Insights</h2>
              <p className="mt-3 leading-7 text-slate-600">Real estate industry perspectives and analysis.</p>
            </div>
            <div id="success-stories" className="scroll-mt-28 rounded-2xl border border-slate-200 p-7">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy h-6 w-6 text-[#0F76EC]" aria-hidden="true">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
              </svg>
              <h2 className="mt-5 text-xl font-semibold text-[#0C3D8A]">Success Stories</h2>
              <p className="mt-3 leading-7 text-slate-600">Approved customer and community stories will appear here.</p>
            </div>
            <div id="tips-resources" className="scroll-mt-28 rounded-2xl border border-slate-200 p-7">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list-checks h-6 w-6 text-[#0F76EC]" aria-hidden="true">
                <path d="m3 17 2 2 4-4" />
                <path d="m3 7 2 2 4-4" />
                <path d="M13 6h8" />
                <path d="M13 12h8" />
                <path d="M13 18h8" />
              </svg>
              <h2 className="mt-5 text-xl font-semibold text-[#0C3D8A]">{"Tips & Resources"}</h2>
              <p className="mt-3 leading-7 text-slate-600">Practical guidance and educational resources will appear here.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
