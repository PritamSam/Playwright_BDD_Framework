import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { chromium } from 'playwright';
import { invalidLogin} from '../pages/4_invalidLogin.js';
import testdata from '../testData/test.json' with { type: 'json' };
import Messages from '../testData/Messages.json' with { type: 'json' };

let loginPage;
let browser;
let page;

Given(`I am on the login page`, async() => {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    loginPage = new invalidLogin(page);
    await page.goto('/');
});

When(`I enter invalid username and password`, async() => {
   await loginPage.enterUsername(testdata.Invalid_Username);
   await loginPage.enterPassword(testdata.Invalid_Password);
});

When(`I click the login button`, async() => {
    await loginPage.clickLogin();
});

Then('I should see an error message indicating invalid credentials', async function () {
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toBe(Messages.invalidCredentials);
    await page.close();
    await browser.close();
});