import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from '../../page-objects/LoginPage';

const loginPage = new LoginPage();

Given('I open the login page', () => {
    loginPage.visit('/login');
});

When('I fill in email with {string}', (email: string) => {
    loginPage.typeText(loginPage.emailInput, email);
});

When('I fill in password with {string}', (password: string) => {
    loginPage.typeText(loginPage.passwordInput, password);
});

When('I click the login button', () => {
    loginPage.clickElement(loginPage.signInButton);
});

Then('I should see {string}', (text: string) => {
    cy.contains(text).should('exist');
});