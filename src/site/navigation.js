/*
 * The site navigation, shared by the desktop menu, the mobile menu and the footer so
 * the three can never disagree. Structure and labels follow Brian's Figma design
 * (About Us, Pricing, Partners). Stories follows the legacy blog index to News.
 */

export const APP_URL = 'https://app.homezai.com/'

export const NAV_GROUPS = Object.freeze([
  {
    label: 'About Us',
    to: '/about',
    items: [
      { label: 'Mission', to: '/about#our-mission' },
      { label: 'Stories', to: '/news' },
      { label: 'News', to: '/news' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    label: 'Pricing',
    to: '/pricing',
    items: [
      { label: 'Pricing Tiers', to: '/pricing#pricing-tiers' },
      { label: 'Onboarding', to: '/pricing#onboarding' },
      { label: 'Features', to: '/pricing#features' },
      { label: 'FAQ', to: '/pricing#pricing-faq' },
    ],
  },
  {
    label: 'Partners',
    to: '/partners/mls',
    items: [
      { label: 'MLS', to: '/partners/mls' },
      { label: 'Brokerages', to: '/partners/brokerages' },
      { label: 'Integrations', to: '/integrations' },
    ],
  },
])

export const LEGAL_LINKS = Object.freeze([
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
  { label: 'Data Processing (DPA)', to: '/dpa' },
  { label: 'Accessibility', to: '/accessibility' },
])

/* Contact details stay as they are on the current site until Homezai confirms a change. */
export const CONTACT = Object.freeze({
  phoneDisplay: '1-502-434-0605',
  phoneHref: 'tel:+15024340605',
  email: 'Info@Homezai.com',
  addressLines: ['255 Alhambra Circle Ste 700', 'Coral Gables, FL 33134'],
})
