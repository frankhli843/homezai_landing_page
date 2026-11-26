import { expect, test } from '@playwright/test'

const articles = [
  '/blog/homezai-partners-with-san-diego-mls-sdmls/',
  '/blog/inman-news-uncomfortable-and-tense-cmls-attendees-push-back-on-reffkin-pitch/',
]
const maps = [
  ['/#benefits', '/pricing', '#features'],
  ['/#demo', '/pricing', ''],
  ['/pricing#quote-form', '/contact', ''],
  ['/pricing/#quote-form', '/contact', ''],
  ['/blog/', '/news', ''],
  ['/blog', '/news', ''],
]
for (const width of [390, 1440]) {
  test.describe(`${width}px legacy URLs`, () => {
    test.beforeEach(async ({ page, baseURL }) => {
      await page.setViewportSize({ width, height: 900 })
      await page.route('**/*', (route) => new URL(route.request().url()).origin === new URL(baseURL).origin
        ? route.continue() : route.abort())
    })
    for (const [source, path, hash] of maps) {
      test(`${source} arrives at ${path}${hash} and Back skips the obsolete URL`, async ({ page }) => {
        await page.goto('/about/')
        await page.goto(source)
        await expect.poll(() => {
          const url = new URL(page.url())
          return [url.pathname.replace(/\/$/, ''), url.hash]
        }).toEqual([path, hash])
        await expect(page.locator('main h1')).toBeVisible()
        if (hash) {
          const target = page.locator(hash)
          await expect(target).toBeVisible()
          await expect.poll(() => target.evaluate((el) => Math.round(el.getBoundingClientRect().top))).toBeGreaterThanOrEqual(70)
          await expect.poll(() => target.evaluate((el) => Math.round(el.getBoundingClientRect().top))).toBeLessThan(140)
        }
        await page.goBack()
        await expect(page).toHaveURL(/\/about\/?$/)
      })
    }
    test('homepage features remains a useful scroll target', async ({ page }) => {
      await page.goto('/#features')
      const target = page.locator('#features')
      await expect(target).toContainText('Your Listings. Your Brand.')
      await expect.poll(() => target.evaluate((el) => Math.round(el.getBoundingClientRect().top))).toBeGreaterThanOrEqual(70)
      await expect.poll(() => target.evaluate((el) => Math.round(el.getBoundingClientRect().top))).toBeLessThan(140)
      await expect(page).toHaveURL(/\/#features$/)
    })
    test('Stories opens News through the rendered menu', async ({ page }) => {
      await page.goto('/')
      if (width === 390) await page.getByRole('button', { name: 'Open navigation', exact: true }).click()
      else await page.getByRole('navigation', { name: 'Main navigation', exact: true }).getByRole('link', { name: 'About Us', exact: true }).focus()
      const nav = page.getByRole('navigation', { name: width === 390 ? 'Mobile navigation' : 'Main navigation', exact: true })
      await nav.getByRole('link', { name: 'Stories', exact: true }).click()
      await expect(page).toHaveURL(/\/news\/?$/)
      await expect(page.locator('main')).toContainText('News')
      for (const article of articles) await expect(page.locator(`main a[href="${article}"]`).first()).toBeVisible()
    })
    test('retained article URLs return 200 with their own canonical and article content', async ({ page }) => {
      for (const article of articles) {
        const response = await page.goto(article)
        expect(response.status()).toBe(200)
        expect(new URL(page.url()).pathname).toBe(article)
        await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://homezai.com${article}`)
        await expect(page.locator('main h1')).toBeVisible()
        expect((await page.locator('main').innerText()).length).toBeGreaterThan(300)
      }
    })
  })
}
