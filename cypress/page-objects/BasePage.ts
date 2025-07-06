export class BasePage {
    visit(path: string) {
        cy.visit(path);
    }

    getElement(selector: string) {
        return cy.get(selector);
    }

    clickElement(selector: string) {
        this.getElement(selector).click();
    }

    typeText(selector: string, text: string) {
        this.getElement(selector).type(text);
    }
}
