/**
 * Public Integrations page content.
 *
 * Kept in its own module so the marketing copy can be asserted by a plain
 * node:test run without booting React or a browser.
 *
 * `logo` is optional. When present it must be a site-relative path under
 * public/ pointing at supplied or primary-source verified artwork. Never point
 * it at a third-party or webmail URL, and never invent artwork for a partner
 * that has not sent any: a card with no `logo` renders an honest text wordmark
 * instead.
 */
export const integrationCategories = [
  {
    name: 'Multiple Listing Service (MLS)',
    items: [
      // Cincinnati shipped as a text wordmark until 2026-09-04, when Frank
      // supplied the official CincyMLS artwork. It is now committed here like
      // the other MLS cards, so every MLS card is real partner artwork.
      {
        name: 'MLS of Greater Cincinnati (CincyMLS)',
        desc: 'Cincinnati, Ohio',
        logo: '/images/integrations/cincymls.png',
        logoAlt: 'CincyMLS logo',
      },
      {
        name: 'Houston Association of REALTORS® (HAR)',
        desc: 'Houston, Texas',
        logo: '/images/integrations/houston-association-of-realtors.png',
        logoAlt: 'Houston Association of REALTORS logo',
      },
      {
        name: 'Coconut Coast Organization of REALTORS®',
        desc: 'Bonita Springs, Florida',
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
  // Brian's second 2026-10-02 request removed BoldTrail from CRM (it is now
  // listed once, as a roster feed), every Leads and Design Apps card, and
  // every calendar except Google. CRM, Leads and Design Apps were left with
  // no cards, so those categories are gone rather than rendered empty.
  {
    name: 'Calendars',
    items: [
      {
        name: 'Google Calendar',
        desc: 'Sync appointments with Google Calendar',
        logo: '/images/integrations/google-calendar.png',
        logoAlt: 'Google Calendar logo',
      },
    ],
  },
  {
    name: 'User Roster Feeds',
    items: [
      {
        name: 'eXp Realty (BoldTrail)',
        desc: 'Agent roster synchronization',
        logo: '/images/integrations/exp-realty.png',
        logoAlt: 'eXp Realty logo',
      },
      {
        name: 'Berkshire Hathaway HomeServices (BoldTrail)',
        desc: 'Agent roster synchronization',
        logo: '/images/integrations/berkshire-hathaway-homeservices.png',
        logoAlt: 'Berkshire Hathaway HomeServices logo',
      },
      {
        name: 'Weichert Realtors (BoldTrail)',
        desc: 'Agent roster synchronization',
        logo: '/images/integrations/weichert-realtors.png',
        logoAlt: 'Weichert Realtors logo',
      },
      // Requested by Brian on 2026-10-05. RE/MAX brokerages reach BoldTrail
      // through MAX/CENTER, so the line names it. It sits with the other
      // brokerages, ahead of the BoldTrail platform card.
      {
        name: 'RE/MAX (BoldTrail)',
        desc: 'MAX/CENTER Agent roster synchronization',
        logo: '/images/integrations/remax.png',
        logoAlt: 'RE/MAX logo',
      },
      {
        name: 'BoldTrail (Inside Real Estate)',
        desc: 'Agent roster synchronization',
        logo: '/images/integrations/boldtrail.png',
        logoAlt: 'BoldTrail logo',
      },
    ],
  },
  // Facebook, Instagram and LinkedIn used to be Leads cards; they now live
  // here only, described as the booking-page embed Brian asked the page to
  // show.
  {
    name: 'Social Media',
    items: [
      {
        name: 'Facebook (Meta)',
        desc: 'Embed your booking page into social posts',
        logo: '/images/integrations/facebook.png',
        logoAlt: 'Facebook logo',
      },
      {
        name: 'Instagram (Meta)',
        desc: 'Embed your booking page into social posts',
        logo: '/images/integrations/instagram.png',
        logoAlt: 'Instagram logo',
      },
      {
        name: 'LinkedIn (Microsoft)',
        desc: 'Embed your booking page into social posts',
        logo: '/images/integrations/linkedin.png',
        logoAlt: 'LinkedIn logo',
      },
    ],
  },
]

export default integrationCategories
