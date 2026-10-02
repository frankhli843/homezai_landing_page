/**
 * Public Integrations page content.
 *
 * Kept in its own module so the marketing copy can be asserted by a plain
 * node:test run without booting React or a browser.
 *
 * `logo` is optional. When present it must be a site-relative path under
 * public/ pointing at artwork the partner supplied to us. Never point it at a
 * third-party or webmail URL, and never invent artwork for a partner that has
 * not sent any: a card with no `logo` renders an honest text wordmark instead.
 */
export const integrationCategories = [
  {
    name: 'Multiple Listing Service (MLS)',
    items: [
      // Cincinnati shipped as a text wordmark until 2026-09-04, when Frank
      // supplied the official CincyMLS artwork. It is now committed here
      // like the other three, so every MLS card is real partner artwork.
      {
        name: 'CincyMLS',
        desc: 'MLS of Greater Cincinnati',
        logo: '/images/integrations/cincymls.png',
        logoAlt: 'CincyMLS logo',
      },
      {
        name: 'Coconut Coast Organization of REALTORS®',
        desc: 'Formerly Bonita-Estero REALTORS®',
        logo: '/images/integrations/coconut-coast-organization-of-realtors.png',
        logoAlt: 'Coconut Coast Organization of REALTORS logo',
      },
      {
        name: 'Baldwin County Association of REALTORS®',
        desc: 'Baldwin County, Alabama',
        logo: '/images/integrations/baldwin-county-association-of-realtors.png',
        logoAlt: 'Baldwin County Association of REALTORS logo',
      },
      {
        name: 'Gulf Coast MLS - Mobile Area Association of REALTORS®',
        desc: 'Mobile area, Alabama',
        logo: '/images/integrations/gulf-coast-mls-mobile-area-association-of-realtors.jpg',
        logoAlt: 'Gulf Coast MLS, Mobile Area Association of REALTORS logo',
      },
      // Requested by Brian on 2026-09-22 for the Innovate Realty onboarding,
      // shipped as a text wordmark, then given the artwork Brian supplied on
      // 2026-10-02.
      //
      // The card says the organization and where it operates, and deliberately
      // claims nothing about what may be DISPLAYED from the feed. Homezai has
      // verified technical access to SDMLS; no consumer-facing display (IDX)
      // authorization has been read for it, and the other cards on this page
      // carry the same open question, so this page has never made that claim.
      {
        name: 'San Diego MLS (SDMLS)',
        desc: 'San Diego, California',
        logo: '/images/integrations/san-diego-mls.png',
        logoAlt: 'San Diego MLS logo',
      },
    ],
  },
  // Requested by Brian on 2026-10-02. These are the systems and services MLSs
  // run on, not MLS organizations, so they get their own category directly
  // below the MLS list. The description is only the coverage Brian asked the
  // card to show; it is not a claim that every market a vendor serves is
  // licensed or enabled in Homezai.
  {
    name: 'MLS Systems and Services',
    items: [
      {
        name: 'Bridge Interactive',
        desc: 'USA and Canada',
        logo: '/images/integrations/bridge-interactive.png',
        logoAlt: 'Bridge Interactive logo',
      },
      {
        name: 'RealtyFeed',
        desc: 'USA and Canada',
        logo: '/images/integrations/realtyfeed.png',
        logoAlt: 'RealtyFeed logo',
      },
      {
        name: 'Rapattoni MLS',
        desc: 'USA',
        logo: '/images/integrations/rapattoni-mls.png',
        logoAlt: 'Rapattoni MLS logo',
      },
    ],
  },
  {
    name: 'Customer Relationship Management (CRM)',
    items: [
      { name: 'BoldTrail by Inside Real Estate', desc: 'Complete real estate CRM platform' },
    ],
  },
  {
    name: 'Calendars',
    items: [
      { name: 'Apple Calendar', desc: 'Seamless scheduling with Apple Calendar' },
      { name: 'Calendly', desc: 'Automated scheduling and booking' },
      { name: 'Google Calendar', desc: 'Sync appointments with Google Calendar' },
      { name: 'Microsoft Outlook Calendar', desc: 'Integrate with Outlook scheduling' },
    ],
  },
  {
    name: 'Leads',
    items: [
      { name: 'Homes.com', desc: 'Lead generation platform' },
      { name: 'Homezai', desc: 'Internal lead management' },
      { name: 'LinkedIn', desc: 'Professional networking leads' },
      { name: 'Meta (Facebook, Instagram)', desc: 'Social media advertising' },
      { name: 'Realtor.com', desc: 'Premier real estate marketplace' },
      { name: 'TikTok', desc: 'Short-form video marketing' },
      { name: 'Zillow', desc: 'Leading real estate marketplace' },
    ],
  },
  {
    name: 'Design Apps',
    items: [
      { name: 'Canva', desc: 'Professional design and marketing materials' },
      { name: 'Maxa Designs', desc: 'Real estate marketing and design solutions' },
    ],
  },
  {
    name: 'User Roster Feeds',
    items: [
      { name: 'Berkshire Hathaway HomeServices (BoldTrail)', desc: 'Agent roster synchronization' },
      { name: 'Weichert Realtors (BoldTrail)', desc: 'Agent roster synchronization' },
    ],
  },
]

export default integrationCategories
