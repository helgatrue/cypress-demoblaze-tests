import {LogIn} from './page/Selectors';

Cypress.Commands.add('login', () => {
    const username = Cypress.env('username');
    const password = Cypress.env('password');

    expect(username, 'env.username must be set').to.be.a('string').and.not.be.empty;
    expect(password, 'env.password must be set').to.be.a('string').and.not.be.empty;

    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('/');
    cy.get(LogIn.LogInButton).click();
    cy.get(LogIn.UsernameField).type(username);
    cy.get(LogIn.PasswordField).type(password);
    cy.get(LogIn.LogInModalSubmitButton).click();
    cy.get(LogIn.LogOutButton).should('be.visible');
});