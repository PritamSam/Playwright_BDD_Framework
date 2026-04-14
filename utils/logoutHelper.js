import { sideMenuPage } from "../pages/2_sideMenuPage";

export async function logoutHelper(page) {
    const sideMenu = new sideMenuPage(page);
    await sideMenu.logout();
}