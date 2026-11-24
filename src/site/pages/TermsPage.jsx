import { Link } from 'react-router-dom'

export default function TermsPage() {
  return (
    <main id="main-content" tabIndex="-1">
      <div className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Website Terms of Service (TOS)</h1>
          <p className="text-gray-600 mb-8">Last Updated: 12/08/2025</p>
          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border p-4 shadow-xl border-blue-100 bg-white/85 shadow-blue-950/5 mb-10 max-w-xs">
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
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {"Welcome to Homezai.com (\"Homezai,\" \"we,\" or \"our\"). By accessing or using our website, mobile tools, or services (collectively, the \"Services\"), you agree to these Terms of Service."}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              <strong>If you do not agree, do not use the Services.</strong>
            </p>
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Overview of Homezai</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Homezai is an AI-powered platform that helps consumers:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>find the right real estate listing agent,</li>
                <li>communicate with agents, and</li>
                <li>schedule home showings.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Homezai is not a real estate brokerage, does not represent buyers or sellers, and does not guarantee real estate outcomes.
              </p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Acceptable Use</h2>
              <p className="text-gray-700 leading-relaxed mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>misuse the platform (spam, fraudulent activity, scraping, reverse engineering),</li>
                <li>violate any applicable state or federal laws,</li>
                <li>attempt unauthorized access to accounts or systems.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">We may suspend or terminate access for violations.</p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. No Professional Advice</h2>
              <p className="text-gray-700 leading-relaxed">
                All content, AI outputs, and recommendations provided by Homezai are for informational purposes only. They do not constitute real estate, legal, or financial advice.
              </p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Accounts and Registration</h2>
              <p className="text-gray-700 leading-relaxed mb-4">If you create an account:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>provide accurate information,</li>
                <li>maintain the security of your credentials.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">You are responsible for all activity under your account.</p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                All content, trademarks, software, and AI models belong to Homezai. You may not copy, distribute, or modify the Services without our permission.
              </p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Services</h2>
              <p className="text-gray-700 leading-relaxed">
                Homezai may integrate with licensed real estate agents, MLS information providers, scheduling software, or communication systems. We are not responsible for third-party services or actions.
              </p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Disclaimers</h2>
              <p className="text-gray-700 leading-relaxed">
                {"The Services are provided \"as is\" without warranties of any kind. We do not guarantee availability, agent quality, scheduling outcomes, or accuracy of AI-generated content."}
              </p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">To the fullest extent allowed by law:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Homezai is not liable for indirect, incidental, or consequential damages.</li>
                <li>Total liability is limited to $100 for website visitors who do not hold a paid subscription.</li>
              </ul>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                {"Your use of the Services is also governed by our "}
                <Link to="/privacy" className="text-blue-600 hover:text-blue-700 underline">Privacy Policy</Link>
                , available on this site.
              </p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">These Terms are governed by the laws of the State of Florida.</p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes</h2>
              <p className="text-gray-700 leading-relaxed">We may update these Terms at any time. Continued use constitutes acceptance.</p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact</h2>
              <p className="text-gray-700 leading-relaxed mb-2">For questions:</p>
              <p className="text-gray-700 leading-relaxed">
                <a href="mailto:contact@homezai.com" className="text-blue-600 hover:text-blue-700 underline">contact@homezai.com</a>
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Homezai.com (HomeEZY, LLC.)
                <br />
                255 Alhambra Circle, Suite 700
                <br />
                Coral Gables, Florida 33135 USA
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
