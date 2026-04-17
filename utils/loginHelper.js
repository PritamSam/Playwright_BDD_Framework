import { homePage } from '../pages/1_homepage.js';

export const loginHelper = async (page, username, password) => {
    await page.goto('https://www.saucedemo.com');
    const homePageInstance = new homePage(page);
    await homePageInstance.login(username, password);
};