export class sideMenuPage {
    constructor(page) {
        this.page = page;
        this.sideMenu = page.getByText("Open Menu");
        this.logoutButton = page.getByRole('button', { name: 'Logout' });
        this.filterButton = page.locator('select[class="product_sort_container"]');
        this.sideMenuContents = page.locator('//div[@class="bm-menu"]/nav/a');
    }
    
    async openSideMenu(){
        await this.sideMenu.click();
    }

    async getSideMenuContents(){
        const contents = await this.sideMenuContents.allTextContents();
        return contents;
    }

    async openFilter(){
        await this.filterButton.click();
    }

    async getFilterOptions(){
        const options = await this.filterButton.locator('option').allTextContents();
        return options;
    }

    async logout(){
        await this.sideMenu.click();
        await this.logoutButton.click();
    }

}