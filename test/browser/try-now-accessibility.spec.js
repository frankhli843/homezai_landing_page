import { expect, test } from '@playwright/test'

const intents = [
  'Create Login',
  'Select Listing',
  'Set Showing Settings',
  'Schedule Showings From Social',
  'Watch Virtual Demo',
]

test('mobile step selectors expose intent, usable targets, focus and navigation', async ({ page, baseURL }) => {
  // Keep analytics and other third-party effects out of a review run.
  await page.route('**/*', (route) => new URL(route.request().url()).origin === new URL(baseURL).origin
    ? route.continue() : route.abort())
  await page.goto('/try-now/')
  const controls = page.locator('main ol button')
  await expect(controls).toHaveCount(5)
  const boxes = []
  for (const [index, intent] of intents.entries()) {
    const control = controls.nth(index)
    // This uses Chromium's computed accessible name at 390px, where visible labels are hidden.
    await expect(control).toHaveAccessibleName(`Step ${index + 1} of 5: ${intent}`)
    const box = await control.boundingBox()
    expect(box.width).toBeGreaterThanOrEqual(44)
    expect(box.height).toBeGreaterThanOrEqual(44)
    boxes.push(box)
    expect(await control.evaluate((button) => {
      const rect = button.getBoundingClientRect()
      return [[rect.width / 2, 2], [rect.width / 2, rect.height - 2], [2, rect.height / 2], [rect.width - 2, rect.height / 2]].every(([x, y]) =>
        button.contains(document.elementFromPoint(rect.x + x, rect.y + y)))
    })).toBe(true)
    // Click near the lower edge, beyond the original 8px visual bar.
    await control.click({ position: { x: box.width / 2, y: box.height - 3 } })
    await expect(page.locator('main h2')).toHaveText(intent)
    await expect(control).toHaveAttribute('aria-current', 'step')
    await expect(page.locator('main ol button[aria-current="step"]')).toHaveCount(1)
    // Names stay stable when the selected step changes.
    for (const [otherIndex, otherIntent] of intents.entries()) {
      await expect(controls.nth(otherIndex)).toHaveAccessibleName(`Step ${otherIndex + 1} of 5: ${otherIntent}`)
    }
  }
  for (let index = 1; index < boxes.length; index += 1) {
    expect(boxes[index].x).toBeGreaterThanOrEqual(boxes[index - 1].x + boxes[index - 1].width)
  }
  await controls.first().focus()
  await page.keyboard.press('Tab')
  await expect(controls.nth(1)).toBeFocused()
  const focus = await controls.nth(1).evaluate((button) => {
    const style = getComputedStyle(button)
    return { width: parseFloat(style.outlineWidth), style: style.outlineStyle, offset: parseFloat(style.outlineOffset) }
  })
  expect(focus.width).toBeGreaterThanOrEqual(2)
  expect(focus.style).toBe('solid')
  expect(focus.offset).toBeGreaterThanOrEqual(2)
  await page.keyboard.press('Enter')
  await expect(page.locator('main h2')).toHaveText('Select Listing')
  await controls.first().click()
  await expect(page.getByRole('heading', { name: 'Activate your account' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Request access' })).toBeVisible()
  await expect(page.locator('main input')).toHaveCount(0)
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(390)
})
