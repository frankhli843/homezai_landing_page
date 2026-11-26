import { existsSync } from 'node:fs'
import { defineConfig } from '@playwright/test'

const reviewUrl = process.env.HOMEZAI_REVIEW_URL
const executablePath = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE
  || (existsSync('/usr/bin/google-chrome') ? '/usr/bin/google-chrome' : undefined)

export default defineConfig({
  testDir: './browser',
  workers: 1,
  retries: 0,
  use: {
    baseURL: reviewUrl || 'http://127.0.0.1:4321',
    viewport: { width: 390, height: 844 },
    launchOptions: { executablePath },
  },
  webServer: reviewUrl ? undefined : {
    command: 'npm run preview -- --host 127.0.0.1 --port 4321 --strictPort',
    url: 'http://127.0.0.1:4321/try-now/',
    reuseExistingServer: !process.env.CI,
  },
})
