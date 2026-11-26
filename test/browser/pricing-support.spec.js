import { expect, test } from '@playwright/test'

for (const width of [390, 1440]) {
  test(`cancellation FAQ offers a working support email action at ${width}px`, async ({ page, baseURL }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.route('**/*', (route) => new URL(route.request().url()).origin === new URL(baseURL).origin
      ? route.continue() : route.abort())
    // Observe the actual email action without starting a mail client or submitting a request.
    await page.addInitScript(() => {
      window.reviewMailDestinations = []
      document.addEventListener('click', (event) => {
        const link = event.target.closest('a[href^="mailto:"]')
        if (link) {
          event.preventDefault()
          window.reviewMailDestinations.push(link.href)
        }
      })
    })
    await page.goto('/pricing/')
    const faq = page.locator('details').filter({ has: page.getByText('What will the cancellation policy be?', { exact: false }) })
    await faq.locator('summary').click()
    const methods = faq.locator('div').filter({ has: page.getByRole('heading', { name: 'How to Cancel', exact: true }) }).last()
    await expect(methods).toContainText('Subscribers may request cancellation by emailing customer support at')
    await expect(methods.locator('a')).toHaveCount(1)
    const email = methods.getByRole('link', { name: 'support@homezai.com', exact: true })
    await expect(email).toHaveAttribute('href', 'mailto:support@homezai.com')
    await email.click()
    expect(await page.evaluate(() => window.reviewMailDestinations)).toEqual(['mailto:support@homezai.com'])
    await expect(page).toHaveURL(/\/pricing\/?$/)
    await expect(faq).toContainText('Homezai will provide confirmation of the cancellation and its effective date.')
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(width)
  })
}
