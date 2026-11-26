import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import './site/figma.css'
import './site/site.css'
import './App.css'
import { trackPageView } from './analytics'
import { ArticlePage, NotFoundPage } from './Blog.jsx'
import { metaForRoute } from './content/seo.js'
import { legacyRedirectFor } from './site/legacyRedirects.js'
import Header from './site/Header.jsx'
import Footer from './site/Footer.jsx'
import HomeSections from './site/pages/HomePage.jsx'
import AboutSections from './site/pages/AboutPage.jsx'
import BenefitsSections from './site/pages/BenefitsPage.jsx'
import PricingSections from './site/pages/PricingPage.jsx'
import TryNowSections from './site/pages/TryNowPage.jsx'
import PartnersMlsSections from './site/pages/PartnersMlsPage.jsx'
import PartnersBrokeragesSections from './site/pages/PartnersBrokeragesPage.jsx'
import IntegrationsSections from './site/pages/IntegrationsPage.jsx'
import NewsSections from './site/pages/NewsPage.jsx'
import ContactSections from './site/pages/ContactPage.jsx'
import TermsSections from './site/pages/TermsPage.jsx'
import PrivacySections from './site/pages/PrivacyPage.jsx'
import DpaSections from './site/pages/DpaPage.jsx'
import AccessibilitySections from './site/pages/AccessibilityPage.jsx'

/*
 * The title index.html shipped, captured at module scope before React mounts
 * and before any page component overwrites document.title.
 *
 * Every subpage sets its own title on mount, but nothing used to set it back,
 * so a client-side navigation home left the previous page name in the browser
 * tab. Capturing the shipped title here rather than repeating the string keeps
 * index.html the single source of truth, so the two can never drift apart.
 */
const SITE_TITLE = typeof document === 'undefined' ? '' : document.title

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

// Fires a GA4 page_view event on every React Router location change
function RouteTracker() {
  const location = useLocation()
  useEffect(() => {
    trackPageView(location.pathname + location.search, document.title)
  }, [location.pathname, location.search])
  return null
}

/* ===== Routed pages: each sets the browser tab title from the same table the prerender uses ===== */
function HomePage() {
  useEffect(() => { document.title = SITE_TITLE }, [])
  return <HomeSections />
}

function AboutPage() {
  useEffect(() => { document.title = metaForRoute('/about/').title }, [])
  return <AboutSections />
}

function BenefitsPage() {
  useEffect(() => { document.title = metaForRoute('/benefits/').title }, [])
  return <BenefitsSections />
}

function PricingPage() {
  useEffect(() => { document.title = metaForRoute('/pricing/').title }, [])
  return <PricingSections />
}

function TryNowPage() {
  useEffect(() => { document.title = metaForRoute('/try-now/').title }, [])
  return <TryNowSections />
}

function PartnersMlsPage() {
  useEffect(() => { document.title = metaForRoute('/partners/mls/').title }, [])
  return <PartnersMlsSections />
}

function PartnersBrokeragesPage() {
  useEffect(() => { document.title = metaForRoute('/partners/brokerages/').title }, [])
  return <PartnersBrokeragesSections />
}

function IntegrationsPage() {
  useEffect(() => { document.title = metaForRoute('/integrations/').title }, [])
  return <IntegrationsSections />
}

function NewsPage() {
  useEffect(() => { document.title = metaForRoute('/news/').title }, [])
  return <NewsSections />
}

function ContactPage() {
  useEffect(() => { document.title = metaForRoute('/contact/').title }, [])
  return <ContactSections />
}

function TermsPage() {
  useEffect(() => { document.title = metaForRoute('/terms/').title }, [])
  return <TermsSections />
}

function PrivacyPage() {
  useEffect(() => { document.title = metaForRoute('/privacy/').title }, [])
  return <PrivacySections />
}

function DpaPage() {
  useEffect(() => { document.title = metaForRoute('/dpa/').title }, [])
  return <DpaSections />
}

function AccessibilityPage() {
  useEffect(() => { document.title = metaForRoute('/accessibility/').title }, [])
  return <AccessibilitySections />
}

/* ===== App Root ===== */
function App() {
  const location = useLocation()
  const redirect = legacyRedirectFor(location)
  useEffect(() => {
    // Replace the obsolete entry and load the destination's own canonical document.
    if (redirect) window.location.replace(redirect)
  }, [redirect])
  if (redirect) return <p>This page has moved to <a href={redirect}>a new address</a>.</p>
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white">
        Skip to main content
      </a>
      <ScrollToTop />
      <RouteTracker />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/benefits" element={<BenefitsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/try-now" element={<TryNowPage />} />
        <Route path="/partners/mls" element={<PartnersMlsPage />} />
        <Route path="/partners/brokerages" element={<PartnersBrokeragesPage />} />
        <Route path="/integrations" element={<IntegrationsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/blog/:slug" element={<ArticlePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/accessibility" element={<AccessibilityPage />} />
        <Route path="/dpa" element={<DpaPage />} />
        <Route path="/support" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
