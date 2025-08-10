describe('DemoBlaze store', () => {
    it('should open homepage', () => {
        cy.clearCookies()
        cy.visit('/');
        // cy.contains('PRODUCT STORE').should('be.visible');
        cy.get('#login2').click();
        cy.get('#loginusername').type('otrofimova');
        cy.wait(1000)
        cy.get('#loginpassword').type('123456')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.wait(500)
        cy.contains('Laptops').click();
        cy.contains('MacBook air').click()
        cy.contains('Add to cart').click();
        cy.get('#cartur').click();
        cy.contains('Place Order').click();
        cy.wait(500)
        cy.get('#name').type('Olga');
        cy.get('#country').type('Germany');
        cy.get('#city').type('Berlin');
        cy.get('#card').type('4242424242424242');
        cy.get('#month').type('01');
        cy.get('#year').type('2028');
        cy.contains('Purchase').click();
        cy.get('.sweet-alert').should('be.visible');
        cy.wait(500)
        cy.get('.confirm').click();
    });
});
