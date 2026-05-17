import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { chekoutPage } from '../pages/3_checkoutPage.js';
import Messages from '../testData/Messages.json' with { type: 'json' };
import { logger } from '../utils/logger.js';

let page;
let checkout;

Given(`I am on the homepage`, async() => {
    logger('Navigating to the homepage');
    page = global.page;
    checkout = new chekoutPage(page);
    await expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');
});

When(`I add a product to the cart`, async() => {
    logger('Adding a product to the cart');
    await checkout.addItemToCart();
  
});

When(`I proceed to checkout`, async() => {
    logger('Proceeding to checkout');
    await checkout.goToCart();
    await checkout.proceedToCheckout();
});

Then(`I should see the order confirmation page`, async() => {
    logger('Filling checkout information');
    await checkout.fillCheckoutInformation('John', 'Doe', '12345');
    await checkout.continueCheckout();
    await checkout.finishCheckout();
    const confirmationMessage = await checkout.getOrderConfirmationMessage();
    expect(confirmationMessage).toBe(Messages.orderConfirmation);
    await checkout.backToHome();
});