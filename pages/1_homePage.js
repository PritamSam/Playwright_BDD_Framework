class homepage {
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

    async getHeaderTitle() {
        return await this.headerTitle.textContent();
    }

    async getProductText() {
        await this.productText.textContent();
    }
}

module.exports = { homepage };