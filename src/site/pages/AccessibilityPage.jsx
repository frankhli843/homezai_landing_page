export default function AccessibilityPage() {
  return (
    <main id="main-content" tabIndex="-1">
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye w-4 h-4">
              <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            Accessibility Commitment
          </div>
          <h1 className="font-bold text-gray-900 mb-4 leading-tight text-[48px]">Accessibility Statement</h1>
          <p className="text-lg text-gray-600">Last updated: March 12, 2025</p>
          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border p-4 shadow-xl border-blue-100 bg-white/85 shadow-blue-950/5 mt-8 max-w-xs">
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-blue-200/40 blur-2xl" aria-hidden="true" />
            <svg viewBox="0 0 390 250" className="relative h-auto w-full" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A community of real estate professionals">
              <path d="M244 45c55-3 99 33 97 82-2 45-44 83-97 84-54 1-91-32-88-77 3-47 38-87 88-89Z" fill="#E7F1FF" />
              <path d="M169 90c0 24-17 43-39 43S90 114 90 90s17-43 40-43 39 19 39 43Zm65-15c0 28-18 50-42 50s-43-22-43-50 19-50 43-50 42 22 42 50Zm73 17c0 23-16 41-37 41s-37-18-37-41 16-42 37-42 37 19 37 42Z" fill="white" stroke="#0F172A" strokeWidth="4" />
              <path d="M90 89c-6-23 10-45 36-47 23-2 41 13 44 35-19 1-36-7-45-22-7 18-18 29-35 34Zm59-23c1-27 18-45 43-45 26 0 42 19 42 47-18-3-31-12-39-28-12 14-27 23-46 26Zm84 17c3-22 18-37 38-37 24 0 39 18 37 42-18-1-31-9-39-23-9 11-21 17-36 18Z" fill="#111827" />
              <path d="M55 220c5-49 30-78 75-78 31 0 53 15 65 43 12-28 37-43 75-43 42 0 66 29 70 78M195 185c-5-39-5-55-3-60" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
              <path d="m292 34 2-19m15 25 12-15m0 33 18-6" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
          <p className="text-gray-800 leading-relaxed mb-4">
            Homezai is committed to ensuring digital accessibility for all individuals, including people with disabilities. We believe everyone should be able to easily access and use our technology to schedule home showings and manage property viewing appointments.
          </p>
          <p className="text-gray-800 leading-relaxed">
            This accessibility statement applies to the Homezai website and the Homezai software platform used by real estate professionals, brokerages, MLS participants, and consumers.
          </p>
        </div>
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-6 h-6 text-purple-600">
                <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                <path d="m9 11 3 3L22 4" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Accessibility Standards</h2>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
            <p className="text-gray-800 leading-relaxed">
              {"Homezai strives to conform to the "}
              <strong>Web Content Accessibility Guidelines (WCAG) 2.2 Level AA</strong>
              , published by the World Wide Web Consortium (W3C). These guidelines define best practices for making digital content accessible to people with a wide range of disabilities, including visual, auditory, motor, and cognitive impairments.
            </p>
            <p className="text-gray-800 leading-relaxed font-medium">
              Homezai also works to support accessibility expectations under applicable laws and regulations, including:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-800">The Americans with Disabilities Act (ADA)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-800">Section 508 of the Rehabilitation Act (where applicable)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-800">Other international accessibility standards where our platform may be used</span>
              </li>
            </ul>
          </div>
        </section>
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-6 h-6 text-blue-600">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Our Approach to Accessibility</h2>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
            <p className="text-gray-800 leading-relaxed">
              Accessibility is integrated into the design, development, and testing of the Homezai platform. We aim to provide an inclusive experience for both real estate professionals and consumers who use our system to schedule and manage home showings.
            </p>
            <p className="text-gray-800 font-medium">Our efforts include:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5">
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <span className="text-gray-800">Designing interfaces that support keyboard navigation</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5">
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <span className="text-gray-800">Supporting screen readers and assistive technologies</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5">
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <span className="text-gray-800">Maintaining clear navigation and consistent page structure</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5">
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <span className="text-gray-800">Providing text alternatives for images and icons</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5">
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <span className="text-gray-800">Ensuring sufficient color contrast for readability</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5">
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <span className="text-gray-800">Supporting responsive layouts across devices</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5">
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <span className="text-gray-800">Designing accessible forms, calendars, and scheduling workflows</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5">
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <span className="text-gray-800">Testing for accessibility during product development and updates</span>
              </li>
            </ul>
          </div>
        </section>
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code w-6 h-6 text-green-600">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Real Estate Technology and MLS Integrations</h2>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
            <p className="text-gray-800 leading-relaxed">Homezai integrates with various real estate technology systems that may include:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-800">Multiple Listing Services (MLS)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-800">Showing management platforms</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-800">Brokerage and agent software tools</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-800">Property listing data feeds</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-800">Third-party authentication and calendar services</span>
              </li>
            </ul>
            <p className="text-gray-800 leading-relaxed mt-4">
              While Homezai works to ensure accessibility within our own platform, some integrated third-party systems, embedded content, or external data sources may not be fully controlled by Homezai. We encourage our integration partners and vendors to follow recognized accessibility standards such as WCAG.
            </p>
          </div>
        </section>
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-refresh-cw w-6 h-6 text-indigo-600">
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                <path d="M21 3v5h-5" />
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                <path d="M8 16H3v5" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Continuous Accessibility Improvements</h2>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
            <p className="text-gray-800 leading-relaxed">
              Accessibility is an ongoing process. Homezai regularly evaluates its website and application to identify areas where accessibility can be improved. These efforts may include:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-800">Periodic accessibility audits</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-800">Internal accessibility testing</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-800">Product design reviews</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-800">Updates aligned with evolving WCAG standards</span>
              </li>
            </ul>
          </div>
        </section>
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-alert w-6 h-6 text-yellow-600">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" x2="12" y1="8" y2="12" />
                <line x1="12" x2="12.01" y1="16" y2="16" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Known Limitations</h2>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <p className="text-gray-800 leading-relaxed">
              Despite our efforts to ensure accessibility across the platform, some areas may not yet fully conform to WCAG 2.2 Level AA standards. We are actively working to address any identified accessibility issues.
            </p>
          </div>
        </section>
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-6 h-6 text-teal-600">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Feedback and Accessibility Support</h2>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
            <p className="text-gray-800 leading-relaxed">
              We welcome feedback from users regarding the accessibility of the Homezai platform. If you experience any difficulty accessing features, scheduling a showing, or using any part of our website or software, please contact us so we can assist you.
            </p>
            <p className="text-gray-800 font-medium">When reporting an issue, please include:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-teal-600 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-800">The webpage or feature you were trying to access</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-teal-600 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-800">The device and browser you were using</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-teal-600 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-800">Any assistive technology used (if applicable)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-teal-600 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-800">A description of the issue you encountered</span>
              </li>
            </ul>
            <p className="text-gray-800 leading-relaxed">We will make reasonable efforts to respond and provide assistance as quickly as possible.</p>
          </div>
        </section>
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-lg font-medium mb-4">Accessibility Support</p>
            <div className="space-y-3 text-blue-50">
              <p>
                <strong className="text-white">Email:</strong>
                {" "}
                <a href="mailto:contact@homezai.com" className="underline hover:text-white">contact@homezai.com</a>
              </p>
              <p>
                <strong className="text-white">Website:</strong>
                {" "}
                <a href="https://www.homezai.com" className="underline hover:text-white">https://www.homezai.com</a>
              </p>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Statement Updates</h3>
            <p className="text-gray-800 leading-relaxed">
              Homezai may update this Accessibility Statement periodically to reflect improvements to our accessibility practices or changes in applicable standards and regulations.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
