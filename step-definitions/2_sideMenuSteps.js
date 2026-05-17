import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import sideMenuHelper from '../testData/sideMenu.json' with { type: 'json' };
import { sideMenuPage } from '../pages/2_sideMenuPage.js';
import filterMenuHelper from '../testData/filterMenu.json' with { type: 'json' };
import { logger } from '../utils/logger.js';

let page;
let sideMenu;

Given(`I am on the homepage of application`, async() => {
    logger('Navigating to the homepage');
    page = global.page;
    sideMenu = new sideMenuPage(page);
    await expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');
});

When(`I click on the menu icon`, async() => {
    logger('Clicking on the menu icon');
    await sideMenu.openSideMenu();
});

Then(`the side menu should be visible`, async() => {
    logger('Verifying the side menu is visible');
    const actualContents = await sideMenu.getSideMenuContents();
    expect(actualContents).toEqual(sideMenuHelper);
});

When(`I click on Filter`, async() => {
    logger('Clicking on the filter option');
    await sideMenu.openFilter();
});

Then(`I should see the filter options`, async() => {
    logger('Verifying the filter options are visible');
    const actualFilterOptions = await sideMenu.getFilterOptions();
    await expect(actualFilterOptions).toEqual(filterMenuHelper);
});