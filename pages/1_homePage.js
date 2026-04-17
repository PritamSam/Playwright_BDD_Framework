export class homePage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.headerTitle = page.locator('.app_logo');
        this.productText = page.getByText('Products');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async navigateToHomePage() {
        await this.page.goto('https://www.saucedemo.com/inventory.html');
    }

    async getHeaderTitle() {
        return await this.headerTitle.textContent();
    }

    async getProductText() {
        return await this.productText.textContent();
    }
}
