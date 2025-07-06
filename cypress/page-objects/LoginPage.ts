export class LoginPage {
    emailInput = 'input[type="email"]';
    passwordInput = 'input[type="password"]';
    signInButton = 'button[type="submit"]';

    visit(path = '/login') {
        cy.visit(path);
    }

    typeText(selector: string, text: string) {
        cy.get(selector).clear().type(text);
    }

    clickElement(selector: string) {
        cy.get(selector).click();
    }

    login(email: string, password: string) {
        this.typeText(this.emailInput, email);
        this.typeText(this.passwordInput, password);
        this.clickElement(this.signInButton);
    }
}
