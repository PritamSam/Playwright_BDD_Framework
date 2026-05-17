const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    baseURL: 'https://www.saucedemo.com/',
    video: 'on',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});