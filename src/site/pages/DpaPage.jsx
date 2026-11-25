import { Link } from 'react-router-dom'

export default function DpaPage() {
  return (
    <main id="main-content" tabIndex="-1">
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-4 h-4">
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            </svg>
            Legal Document
          </div>
          <h1 className="font-bold text-gray-900 mb-4 leading-tight text-[48px]">Data Processing Addendum (DPA)</h1>
          <p className="text-lg text-gray-600">Last Updated: December 8, 2025</p>
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
          <p className="text-gray-800 leading-relaxed">
            {"This Data Processing Addendum (\"DPA\") is part of the Master Service Agreement (MSA) or Terms of Service between "}
            <strong>Homezai, Inc.</strong>
            {" (\"Processor\") and the customer (\"Controller\"). This DPA describes data protection obligations relating to Homezai's processing of personal data."}
          </p>
        </div>
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text w-6 h-6 text-purple-600">
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="M10 9H8" />
                <path d="M16 13H8" />
                <path d="M16 17H8" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">1. Definitions</h2>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
            <p className="text-gray-800 leading-relaxed">
              <strong>{"\"Personal Data\""}</strong>
              {" means any information relating to an identified or identifiable individual processed through the Services."}
            </p>
            <p className="text-gray-800 leading-relaxed">
              <strong>{"\"Processing,\" \"Controller,\" and \"Processor\""}</strong>
              {" are defined consistent with standard privacy laws (GDPR-style alignment)."}
            </p>
            <p className="text-gray-800 leading-relaxed">
              <strong>{"\"Subprocessor\""}</strong>
              {" means any third party engaged by Homezai to assist with processing Personal Data."}
            </p>
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
            <h2 className="text-2xl font-bold text-gray-900">2. Roles</h2>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
            <div className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5">
                <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                <path d="m9 11 3 3L22 4" />
              </svg>
              <p className="text-gray-800">
                {"The customer acts as "}
                <strong>Controller</strong>
                .
              </p>
            </div>
            <div className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5">
                <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                <path d="m9 11 3 3L22 4" />
              </svg>
              <p className="text-gray-800">
                {"Homezai acts as a "}
                <strong>Processor</strong>
                .
              </p>
            </div>
            <div className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5">
                <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                <path d="m9 11 3 3L22 4" />
              </svg>
              <p className="text-gray-800">Customer determines the nature and purpose of data processed through the Services.</p>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-check w-6 h-6 text-green-600">
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="m9 15 2 2 4-4" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">3. Processor Obligations</h2>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <p className="text-gray-800 mb-4 font-medium">Homezai shall:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-800">process Personal Data only on documented instructions from Customer,</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-800">implement industry-standard technical and organizational security measures,</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-800">ensure personnel are bound by confidentiality,</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-800">assist Customer with data subject requests,</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-800">notify Customer of any confirmed Personal Data breach within 72 hours,</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-800">return or delete Personal Data at termination unless legally required to retain it.</span>
              </li>
            </ul>
          </div>
        </section>
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-6 h-6 text-indigo-600">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">4. Subprocessors</h2>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
            <p className="text-gray-800 leading-relaxed">Homezai may engage Subprocessors for hosting, messaging, analytics, scheduling, and support.</p>
            <p className="text-gray-800 font-medium">Homezai will:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-800">use only vetted Subprocessors under written agreements,</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-800">ensure equal or stronger data protection obligations,</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-800">maintain an updated list of Subprocessors upon written request.</span>
              </li>
            </ul>
          </div>
        </section>
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-6 h-6 text-teal-600">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">5. Cross-Border Data Transfers</h2>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
            <p className="text-gray-800 leading-relaxed">
              Personal Data may be transferred to the United States or other jurisdictions where Homezai or its Subprocessors operate.
            </p>
            <p className="text-gray-800 leading-relaxed">All transfers will comply with applicable privacy laws.</p>
          </div>
        </section>
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock w-6 h-6 text-red-600">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">6. Security Measures</h2>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <p className="text-gray-800 mb-4 font-medium">Homezai shall maintain safeguards including:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-800">encryption at rest and in transit,</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-800">access controls and authentication,</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-800">monitoring and logging,</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-800">data minimization,</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-800">disaster recovery and backup practices.</span>
              </li>
            </ul>
          </div>
        </section>
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-database w-6 h-6 text-orange-600">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                <path d="M3 12A9 3 0 0 0 21 12" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">7. Data Subject Requests</h2>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
            <p className="text-gray-800 leading-relaxed">Homezai will assist Customer in responding to requests regarding:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-orange-600 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-800">access,</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-orange-600 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-800">correction,</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-orange-600 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-800">deletion,</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-orange-600 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-800">restriction of processing,</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-orange-600 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-800">data portability.</span>
              </li>
            </ul>
            <p className="text-gray-800 leading-relaxed mt-4">Customer is responsible for verifying identity and legality of all requests.</p>
          </div>
        </section>
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-check w-6 h-6 text-yellow-600">
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="m9 15 2 2 4-4" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">8. Audit Rights</h2>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
            <p className="text-gray-800 leading-relaxed">
              Upon reasonable notice, Customer may request security documentation, certifications, or summaries of audit reports.
            </p>
            <p className="text-gray-800 leading-relaxed">
              {"On-site audits may be permitted once per year and at Customer's expense, provided they do not disrupt operations or expose platform source code or proprietary information."}
            </p>
          </div>
        </section>
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-6 h-6 text-pink-600">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{"9. Retention & Deletion"}</h2>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
            <p className="text-gray-800 leading-relaxed">Upon termination of Services, Homezai will:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-pink-600 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-800">delete Personal Data within 60 days, or</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-pink-600 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-800">return it if requested by Customer before deletion,</span>
              </li>
            </ul>
            <p className="text-gray-800 leading-relaxed">unless retention is required by law.</p>
          </div>
        </section>
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-6 h-6 text-gray-600">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">10. Liability</h2>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <p className="text-gray-800 leading-relaxed">Liability limits in the MSA apply to this DPA.</p>
          </div>
        </section>
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-6 h-6 text-cyan-600">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">11. Term</h2>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <p className="text-gray-800 leading-relaxed">This DPA remains in effect as long as Homezai processes Personal Data on behalf of the Customer.</p>
          </div>
        </section>
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p className="mb-6">For questions regarding this Data Processing Addendum:</p>
            <div className="space-y-3 text-blue-50">
              <p>
                <strong className="text-white">Email:</strong>
                {" "}
                <a href="mailto:contact@homezai.com" className="underline hover:text-white">contact@homezai.com</a>
              </p>
              <p>
                <strong className="text-white">Company:</strong>
                {" Homezai.com (HomeEZY, LLC.)"}
              </p>
              <p>
                <strong className="text-white">Address:</strong>
                <br />
                255 Alhambra Circle, Suite 700
                <br />
                Coral Gables, Florida 33135
                <br />
                USA
              </p>
            </div>
          </div>
        </section>
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Related Legal Documents</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/terms" className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text w-5 h-5 text-blue-600">
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="M10 9H8" />
                <path d="M16 13H8" />
                <path d="M16 17H8" />
              </svg>
              <span className="text-gray-900 font-medium">Terms of Service</span>
            </Link>
            <Link to="/privacy" className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock w-5 h-5 text-blue-600">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span className="text-gray-900 font-medium">Privacy Policy</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
