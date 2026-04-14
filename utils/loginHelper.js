import homepage from '../pages/1_Homepage.js';

export const loginHelper = async (page, username, password) => {
    const homePage = new homepage(page);
    await homePage.login(username, password);
};