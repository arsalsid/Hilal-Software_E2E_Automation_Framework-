
class LoginPage {
    constructor() {
        this.locator = {};
    }

    setlocators(locator) {
        this.locator = locator;
    }
   

    visit() {
        cy.visit('/')
    }

    login(username, password) {
        expect(this.locator.usernameInput).to.exist;
        cy.get(this.locator.usernameInput).type(username)
        expect(this.locator.passwordInput).to.exist;
        cy.get(this.locator.passwordInput).type(password)
        cy.get(this.locator.loginButton).click() 
        console.log('Locators:', this.locator);
    }

    assertInvalidLogin() {
        cy.get(this.locator.errorMessage)
            .should('be.visible')
            .and('contain', 'Username and Password do not match')
            console.log('Locators:', this.locator);
    }

    assertBlankLogin() {
        cy.get(this.locator.usernameInput).should('have.value', '')
        cy.get(this.locator.passwordInput).should('have.value', '')
        console.log('Locators:', this.locator);
    }
}

const loginPage = new LoginPage()
export default loginPage;