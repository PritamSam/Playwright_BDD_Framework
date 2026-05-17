import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';  
import { homePage } from '../pages/1_homepage.js';
import { logger } from '../utils/logger.js';

let homepage;
let page;

Given(`I am logged in`, async() => {
    logger('Navigating to the homepage');
    page = global.page;
    homepage = new homePage(page);
});

When(`I navigate to Home Page`, async() => {
    logger('Navigating to the home page');
    await homepage.navigateToHomePage();
});

Then(`I should navigate to Home Page successfully`, async() => {
    logger('Verifying navigation to the home page');
    await expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');  // Fixed
});

Then(`I should see Home Page Contents`, async() => {
    logger('Verifying home page contents');
    await expect(await homepage.getHeaderTitle()).toBe('Swag Labs');
    await expect(await homepage.getProductText()).toBe('Products');   
});