export class chekoutPage {
    constructor(page) {
        this.page = page;
        this.addToCartButton = page.locator('//div[@class="pricebar"]/button');
        this.cardButton = page.locator('a.shopping_cart_link')
        this.checkoutButton = page.getByText('Checkout', { exact: true });
        this.firstNameInput = page.getByPlaceholder('First Name');
        this.lastNameInput = page.getByPlaceholder('Last Name');
        this.postalCodeInput = page.getByPlaceholder('Zip/Postal Code');
        this.continueButton = page.getByText('Continue', { exact: true });
        this.finishButton = page.getByText('Finish', { exact: true });
        this.orderConfirmationMessage = page.locator('h2.complete-header');
        this.backHomeButton = page.getByText('Back Home', { exact: true });
   }

    async addItemToCart(){
        await this.addToCartButton.first().click();    
    } 

    async goToCart(){
        await this.cardButton.click();
    }   

    async proceedToCheckout(){
        await this.checkoutButton.click();
    }

    async fillCheckoutInformation(firstName, lastName, postalCode){
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
    }

    async continueCheckout(){
        await this.continueButton.click();
    }

    async finishCheckout(){
        await this.finishButton.click();
    }

    async getOrderConfirmationMessage(){
        return await this.orderConfirmationMessage.textContent();
    }

    async backToHome(){
        await this.backHomeButton.click();
    }

}