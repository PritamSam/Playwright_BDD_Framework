import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';  
import { homePage } from '../pages/1_homepage.js';

let homepage;
const page = global.page;  // Add this

Given(`I am logged in`, async() => {
    homepage = new homePage(page);
});

When(`I navigate to Home Page`, async() => {
    await homepage.navigateToHomePage();
});

Then(`I should navigate to Home Page successfully`, async() => {
    await expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');  // Fixed
});

Then(`I should see Home Page Contents`, async() => {
    await expect(await homepage.getHeaderTitle()).toBe('Swag Labs');
    await expect(await homepage.getProductText()).toBe('Products');   
});