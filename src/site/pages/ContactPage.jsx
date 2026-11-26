import { trackCtaClick } from '../../analytics'
import { useEffect } from 'react'

const HUBSPOT_EMBED = 'https://js-na2.hsforms.net/forms/embed/245865428.js'

export default function ContactPage() {
  // The HubSpot embed script fills the .hs-form-frame placeholder with the contact form.
  useEffect(() => {
    if (!document.querySelector(`script[src="${HUBSPOT_EMBED}"]`)) {
      const script = document.createElement('script')
      script.src = HUBSPOT_EMBED
      script.defer = true
      document.head.appendChild(script)
    }
  }, [])

  return (
    <main id="main-content" tabIndex="-1">
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-blue-600/25 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">Contact us</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">Let’s start a conversation.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Whether you’re exploring Homezai, looking for a partnership, or need help, our team is ready to listen.
          </p>
        </div>
      </section>
      <section className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div className="pt-2">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">Get in touch</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">We’re here to help you move forward.</h2>
            <p className="mt-5 max-w-lg leading-7 text-slate-600">
              Share a few details and the right member of our team will follow up. We typically respond within one business day.
            </p>
            <dl className="mt-10 space-y-5">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail h-5 w-5" aria-hidden="true">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <div>
                  <dt className="text-sm font-bold text-slate-950">Email</dt>
                  <dd className="mt-1 text-sm leading-6 text-slate-600">
                    <a className="transition hover:text-blue-700" href="mailto:info@homezai.com" onClick={() => trackCtaClick('contact_click', 'contact_email')}>info@homezai.com</a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone h-5 w-5" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <div>
                  <dt className="text-sm font-bold text-slate-950">Phone</dt>
                  <dd className="mt-1 text-sm leading-6 text-slate-600">
                    <a className="transition hover:text-blue-700" href="tel:+15024340605" onClick={() => trackCtaClick('contact_click', 'contact_phone')}>1-502-434-0605</a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin h-5 w-5" aria-hidden="true">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <dt className="text-sm font-bold text-slate-950">Office</dt>
                  <dd className="mt-1 text-sm leading-6 text-slate-600">255 Alhambra Circle, Suite 700, Coral Gables, FL 33134</dd>
                </div>
              </div>
            </dl>
          </div>
          <div className="min-h-[32rem] rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-9">
            <div className="hs-form-frame" data-region="na2" data-form-id="2d0028b7-cef3-4941-8bdf-99992a68cfd5" data-portal-id="245865428" />
          </div>
        </div>
      </section>
    </main>
  )
}
