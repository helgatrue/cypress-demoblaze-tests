import { CustomerDetails, Purchase } from "/cypress/support/page/Selectors";
import customer from "/cypress/fixtures/customer.json";
import { PRODUCT_ADDED } from "/cypress/support/assertions";
import {HOME_URL} from "/cypress/support/credentials";
import { slowCypressDown } from 'cypress-slow-down';

slowCypressDown()
describe("End-to-end laptop purchase flow", () => {
    it("Test should add laptop to the cart and finish the purchasing process", () => {
        cy.login();

        //1. Select the laptop
        cy.contains(Purchase.LaptopButton).click();
        cy.contains(Purchase.MacBookItem).click();
        cy.on("window:alert", (txt) => {
            expect(txt).to.equal(PRODUCT_ADDED);
        });

        // 2. Add the laptop to the cart
        cy.contains(Purchase.AddToCartButton).click();
        cy.get(Purchase.BasketButton).click();

        // 3. Put the customer's details
        cy.contains(Purchase.PlaceOrderButton).click();
        cy.get(CustomerDetails.Name).type(customer.name);
        cy.get(CustomerDetails.Country).type(customer.country);
        cy.get(CustomerDetails.City).type(customer.city);
        cy.get(CustomerDetails.CardNumber).type(customer.cardNumber);
        cy.get(CustomerDetails.CardMonth).type(customer.month);
        cy.get(CustomerDetails.CardYear).type(customer.year);
        cy.contains(CustomerDetails.BuyButton).click();
        cy.wait(500);

        // 4. Validate order details
        cy.get(CustomerDetails.ConfirmationWindow)
            .should('be.visible')
            .and('contain', customer.name)
            .and('contain', customer.cardNumber)
            .and('contain', 700);
        cy.get(CustomerDetails.SubmitButton).click();
        cy.wait(500);
        cy.url().should('eq', HOME_URL);
    });
});