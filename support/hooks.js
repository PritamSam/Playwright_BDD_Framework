import { BeforeAll, AfterAll, Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { loginHelper } from '../utils/loginHelper.js';
import { logoutHelper } from '../utils/logoutHelper.js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { logger } from '../utils/logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const testdata = JSON.parse(readFileSync(join(__dirname, '../testData/test.json'), 'utf-8'));

let browser;
let context;
let page;

setDefaultTimeout(60000);

BeforeAll({ tags: 'not @invalidLogin', timeout: 30000 }, async function () {
  logger('HOOK: running BeforeAll');
  browser = await chromium.launch({ headless: true });
  context = await browser.newContext({
      recordVideo: {
          dir: 'reports/videos/'
      }
  });
  page = await context.newPage();
  global.page = page;
  global.context = context;
  global.browser = browser;

  console.log('HOOK: Entering Credentials');
  const username = testdata.Valid_Username;
  const password = testdata.Valid_Password;
  await loginHelper(page, username, password);
  console.log('HOOK: Login successful');
});


After(async function (scenario) {
  if (scenario.result.status === 'FAILED') {
      logger('HOOK: capturing failure screenshot');
      const screenshotName =
          scenario.pickle.name.replace(/\s+/g, '_');
      await page.screenshot({
          path: `reports/screenshots/${screenshotName}.png`,
          fullPage: true
      });
      logger('HOOK: screenshot captured');
  }
});

AfterAll({ tags: 'not @invalidLogin' }, async function () {
  logger('HOOK: running AfterAll');
    if (page) {
        logger('HOOK: logging out');
        await logoutHelper(page);
        await page.close();
        console.log('HOOK: page closed');
    }

    if (context) {
        await context.close();
        console.log('HOOK: context closed');
    }

    if (browser) {
        await browser.close();
        console.log('HOOK: browser closed');
    }

    global.page = null;
    global.context = null;
    global.browser = null;
});
