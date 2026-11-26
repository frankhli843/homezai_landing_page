import { expect, test } from '@playwright/test'

const actions = [
  ['/', 'header a[href="https://app.homezai.com/"]', 0, 'app_login_click', 'navbar'],
  ['/', 'header a[href="/try-now"]', 0, 'try_now_click', 'navbar'],
  ...['hero', 'how_it_works', 'cta_section', 'closing_cta'].map((location, index) =>
    ['/', 'main a[href="/try-now"]', index, 'try_now_click', location]),
  ...['hero', 'premium_plan', 'pro_plan', 'team_plan', 'cta_section'].map((location, index) =>
    ['/pricing/', 'main a[href="/try-now"]', index, 'try_now_click', location]),
  ...['pricing_card', 'features_section'].map((location, index) =>
    ['/pricing/', 'main a[href="/partners/brokerages"]', index, 'enterprise_cta_click', location]),
  ...['brokerages', 'mls'].flatMap(kind => [
    [`/partners/${kind}/`, 'main a[href="/contact"]', 0, 'contact_click', `${kind === 'brokerages' ? 'brokerage' : kind}_hero`],
    [`/partners/${kind}/`, 'main a[href^="mailto:"]', 0, 'contact_click', `${kind === 'brokerages' ? 'brokerage' : kind}_cta`],
  ]),
  ['/about/', 'main a[href="/try-now"]', 0, 'try_now_click', 'cta_section'],
  ...['hero', 'benefits_section', 'cta_section'].map((location, index) =>
    ['/benefits/', 'main a[href="/try-now"]', index, 'try_now_click', location]),
  ['/integrations/', 'main a[href="/try-now"]', 0, 'try_now_click', 'integrations_cta'],
  ['/integrations/', 'main a[href^="mailto:"]', 0, 'contact_click', 'integrations_cta'],
  ['/contact/', 'main a[href^="mailto:"]', 0, 'contact_click', 'contact_email'],
  ['/contact/', 'main a[href^="tel:"]', 0, 'contact_click', 'contact_phone'],
]

for (const width of [390, 1440]) {
  for (const [path, selector, index, eventName, location] of actions) {
    test(`${width}px ${path} ${selector} ${index} emits one structural event`, async ({ page, baseURL }) => {
      await page.setViewportSize({ width, height: 900 })
      await page.route('**/*', route => new URL(route.request().url()).origin === new URL(baseURL).origin
        ? route.continue() : route.abort())
      await page.addInitScript(() => {
        window.reviewEvents = []
        Object.defineProperty(window, 'gtag', { configurable: false, get: () => (...args) => window.reviewEvents.push(args), set: () => {} })
        // Stop only external browser/OS navigation; the React click handler still runs.
        document.addEventListener('click', event => {
          const link = event.target.closest('a')
          if (link && new URL(link.href).origin !== window.location.origin) event.preventDefault()
        })
      })
      await page.goto(path + '?review=private-content#review-private-content')
      if (width === 390 && selector.startsWith('header')) await page.getByRole('button', { name: 'Open navigation' }).click()
      const control = page.locator(selector).filter({ visible: true }).nth(index)
      await control.click()
      expect(await page.evaluate(() => window.reviewEvents.filter(args => args[0] === 'event'))).toEqual([
        ['event', eventName, { button_location: location, page_path: path }],
      ])
      expect(await page.evaluate(() => JSON.stringify(window.reviewEvents.filter(args => args[0] === 'event')))).not.toContain('private-content')
    })
  }
}
