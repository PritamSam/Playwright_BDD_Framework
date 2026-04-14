import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import sideMenuHelper from '../testData/sideMenu.json';
import { sideMenuPage } from '../pages/2_sideMenuPage.js';
import filterMenu from '../testData/filterMenu.json';

const page = global.page;
let sideMenu;
let filterOptions;

Given(`I am on the homepage`, async() => {
    sideMenu = new sideMenuPage(page);
    filterOptions = new filterMenu(page);
    await expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');
});

When(`I click on the menu icon`, async() => {
    await sideMenu.openSideMenu();
});

Then(`the side menu should be visible`, async() => {
    await expect(sideMenu.sideMenu).toBeVisible();
    await expect(getSideMenuContents()).toBe(sideMenuHelper);
});

When(`I click on Filter`, async() => {
    await sideMenu.openFilterMenu();
});

Then(`I should see the filter options`, async() => {
    await expect(filterOptions.filterMenu).toBeVisible();
    await expect(getFilterMenuContents()).toBe(filterMenu);
});