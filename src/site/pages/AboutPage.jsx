import { trackCtaClick } from '../../analytics'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <main id="main-content" tabIndex="-1">
      <section id="our-mission" className="relative scroll-mt-24 overflow-hidden border-b border-blue-100 bg-gradient-to-b from-blue-50 via-white to-white px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-200/30 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.58fr_0.42fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-blue-600">Technology should make us more human.</p>
            <p className="mt-8 text-sm font-bold uppercase tracking-widest text-slate-500">Mission</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              More time for the people who matter
            </h1>
            <svg viewBox="0 0 520 46" className="mt-2 h-auto w-full max-w-lg text-[#0F76EC]" fill="none" aria-hidden="true">
              <path d="M8 17C136 -2 360 -2 510 14" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              <path d="M42 36C176 10 353 11 476 30" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              We make the behind-the-scenes work of real estate simpler, so agents can spend more time with clients and less time on busywork.
            </p>
          </div>
          <div className="mx-auto w-full max-w-lg rounded-[2rem] border border-blue-100 bg-white/80 p-5 shadow-xl shadow-blue-900/5">
            <img src="/images/site/more-time-for-people.png" alt="Three people connecting in a community" className="h-auto w-full" />
          </div>
        </div>
      </section>
      <section id="our-vision" className="scroll-mt-24 overflow-hidden bg-slate-950 px-4 py-20 text-white sm:px-6 sm:py-28 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" aria-hidden="true" />
          <div className="relative grid gap-10 lg:grid-cols-[0.3fr_0.7fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-300">Our Vision</p>
            </div>
            <div>
              <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
                <span className="block">A future where agents have</span>
                <span className="block">more power to succeed.</span>
              </h2>
              <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-300">
                We believe great technology should give people more freedom, not make them more dependent on big platforms. We want agents to build stronger businesses, keep control of their relationships, and create more opportunity in the communities they serve. When local businesses thrive, communities do too.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="our-values" className="scroll-mt-24 bg-slate-50 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Our Values</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              <span className="block">Built around people, ownership,</span>
              <span className="block">and local opportunity.</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm lg:col-span-2">
              <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 " aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart h-7 w-7">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
                <svg viewBox="0 0 20 16" className="absolute -right-2 -top-2 h-5 w-6 text-slate-950" fill="none">
                  <path d="M3 8 1 5M9 5V1M15 8l3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </span>
              <h3 className="mt-7 text-xl font-bold text-slate-950">People come first.</h3>
              <p className="mt-3 leading-7 text-slate-600">Real estate is personal. Technology should support the relationships and the humans behind it.</p>
            </article>
            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm lg:col-span-2">
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
              <h3 className="mt-7 text-xl font-bold text-slate-950">Keep it simple.</h3>
              <p className="mt-3 leading-7 text-slate-600">Good technology makes complicated things feel easy. No unnecessary steps. No confusing language.</p>
            </article>
            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm lg:col-span-2">
              <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 " aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check h-7 w-7">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <svg viewBox="0 0 20 16" className="absolute -right-2 -top-2 h-5 w-6 text-slate-950" fill="none">
                  <path d="M3 8 1 5M9 5V1M15 8l3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </span>
              <h3 className="mt-7 text-xl font-bold text-slate-950">Your business is yours.</h3>
              <p className="mt-3 leading-7 text-slate-600">Your brand, your relationships, and your customer data matter.</p>
            </article>
            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm lg:col-span-2">
              <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 " aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up h-7 w-7">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
                <svg viewBox="0 0 20 16" className="absolute -right-2 -top-2 h-5 w-6 text-slate-950" fill="none">
                  <path d="M3 8 1 5M9 5V1M15 8l3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </span>
              <h3 className="mt-7 text-xl font-bold text-slate-950">More opportunity for everyone.</h3>
              <p className="mt-3 leading-7 text-slate-600">
                We want independent agents and small businesses to have the tools to compete, grow, and keep more of what they earn.
              </p>
            </article>
            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm lg:col-span-2">
              <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 " aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-handshake h-7 w-7">
                  <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                  <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                  <path d="m21 3 1 11h-2" />
                  <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                  <path d="M3 4h8" />
                </svg>
                <svg viewBox="0 0 20 16" className="absolute -right-2 -top-2 h-5 w-6 text-slate-950" fill="none">
                  <path d="M3 8 1 5M9 5V1M15 8l3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </span>
              <h3 className="mt-7 text-xl font-bold text-slate-950">Better together.</h3>
              <p className="mt-3 leading-7 text-slate-600">We believe in helping the people who know their neighborhoods build stronger local communities.</p>
            </article>
            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm lg:col-span-2">
              <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 " aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock-keyhole h-7 w-7">
                  <circle cx="12" cy="16" r="1" />
                  <rect x="3" y="10" width="18" height="12" rx="2" />
                  <path d="M7 10V7a5 5 0 0 1 10 0v3" />
                </svg>
                <svg viewBox="0 0 20 16" className="absolute -right-2 -top-2 h-5 w-6 text-slate-950" fill="none">
                  <path d="M3 8 1 5M9 5V1M15 8l3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </span>
              <h3 className="mt-7 text-xl font-bold text-slate-950">Privacy and control.</h3>
              <p className="mt-3 leading-7 text-slate-600">We believe agents deserve transparency, privacy, and control.</p>
            </article>
          </div>
        </div>
      </section>
      <section className="bg-blue-600 px-4 py-16 text-center text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            <span className="block">More time for clients.</span>
            <span className="block">More opportunity to grow.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Start with your first listing and see how Homezai makes the work around every showing simpler.
          </p>
          <Link to="/try-now" onClick={() => trackCtaClick('try_now_click', 'cta_section')} className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-bold text-blue-700 shadow-sm transition-all hover:bg-blue-50 hover:shadow-md">
            TRY NOW
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
