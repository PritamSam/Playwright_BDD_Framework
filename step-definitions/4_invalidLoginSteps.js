import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { chromium } from 'playwright';
import { invalidLogin} from '../pages/4_invalidLogin.js';
import testdata from '../testData/test.json' with { type: 'json' };
import Messages from '../testData/Messages.json' with { type: 'json' };
import { logger } from '../utils/logger.js';

let loginPage;
let browser;
let page;
let context;

Given(`I am on the login page`, async() => {
    logger('Navigating to the login page');
    browser = await chromium.launch({ headless: true });
    context = await browser.newContext();
    page = await context.newPage();
    loginPage = new invalidLogin(page);
    await page.goto('https://www.saucedemo.com/');
});

When(`I enter invalid username and password`, async() => {
    logger('Entering invalid username and password');
   await loginPage.enterUsername(testdata.Invalid_Username);
   await loginPage.enterPassword(testdata.Invalid_Password);
});

When(`I click the login button`, async() => {
    logger('Clicking the login button');
    await loginPage.clickLogin();
});

Then('I should see an error message indicating invalid credentials', async function () {
    logger('Verifying the error message for invalid credentials');
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toBe(Messages.invalidCredentials);
    await page.close();
    await browser.close();
});