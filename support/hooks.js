import { BeforeAll, AfterAll } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { loginHelper } from '../utils/loginHelper.js';
import { logoutHelper } from '../utils/logoutHelper.js';
import testdata from '../testData/test.json' with { type: 'json' };

let browser;
let page;

BeforeAll({ tags: 'not @invalidLogin', timeout: 30000 }, async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  const username = testdata.Valid_Username; 
  const password = testdata.Valid_Password; 
  await loginHelper(page, username, password);
  // Store page globally for scenarios if needed
  global.page = page;
});

AfterAll({ tags: 'not @invalidLogin' }, async function () {
  await logoutHelper(page);
  if (page) await page.close();
  if (browser) await browser.close();
  // Clear global state to prevent conflicts between multiple suite runs
  global.page = null;
});