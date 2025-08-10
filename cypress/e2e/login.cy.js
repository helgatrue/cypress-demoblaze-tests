import {LogIn} from "/cypress/support/page/Selectors";
import {INVALID_PASSWORD, INVALID_USERNAME, PASSWORD, USERNAME} from "/cypress/support/credentials";
import {EMPTY_FIELDS, NON_EXISTENT_USER, WRONG_PASSWORD} from "/cypress/support/assertions";
import {slowCypressDown} from "cypress-slow-down";

slowCypressDown()
describe('Log in scenario', () => {
    beforeEach(() => {
        cy.clearCookies()
        cy.visit('/');
        cy.get(LogIn.LogInButton).click();
    });

    it('User can log in with valid credentials', () => {
        cy.get(LogIn.UsernameField).type(USERNAME);
        cy.get(LogIn.PasswordField).type(PASSWORD);
        cy.get(LogIn.LogInModalSubmitButton).click();
        cy.get(LogIn.LogOutButton).should('be.visible');
    });

    it('User cannot log in with wrong password', () => {
        cy.get(LogIn.UsernameField).type(USERNAME);
        cy.get(LogIn.PasswordField).type(INVALID_PASSWORD);
        cy.get(LogIn.LogInModalSubmitButton).click();
        cy.on('window:alert', (text) => {
            expect(text).to.eq(WRONG_PASSWORD);
        });
    });

    it('User cannot log in with non-existing username and password', () => {
        cy.get(LogIn.UsernameField).type(INVALID_USERNAME);
        cy.get(LogIn.PasswordField).type(INVALID_PASSWORD);
        cy.get(LogIn.LogInModalSubmitButton).click();
        cy.on('window:alert', (text) => {
            expect(text).to.eq(NON_EXISTENT_USER);
        });
    });

    it('Login form validation', () => {
        cy.get(LogIn.LogInModalSubmitButton).click();
        cy.on('window:alert', (text) => {
            expect(text).to.eq(EMPTY_FIELDS);
        });
    });

    it('Session persists after page reload', () => {
        cy.get(LogIn.UsernameField).type(USERNAME);
        cy.get(LogIn.PasswordField).type(PASSWORD);
        cy.get(LogIn.LogInModalSubmitButton).click();
        cy.wait(500);
        cy.reload();
    });

    it('User can log out', () => {
        cy.get(LogIn.UsernameField).type(USERNAME);
        cy.get(LogIn.PasswordField).type(PASSWORD);
        cy.get(LogIn.LogInModalSubmitButton).click();
        cy.get(LogIn.LogOutButton).click();
        cy.get(LogIn.LogInButton).should('be.visible');
    });
});
