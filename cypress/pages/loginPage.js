
class LoginPage {
    constructor() {
        cy.fixture('locators/loginPage').as('login')
    }

    visit() {
        cy.visit('/')
    }

    login(username, password) {
        cy.get('@login').then(locator =>{
            cy.get(locator.usernameInput).type(username)
            cy.get(locator.passwordInput).type(password)
            cy.get(locator.loginButton).click()
        })
    }

    assertInvalidLogin() {
        cy.get('@login').then(locator => {
            cy.get(locator.errorMessage)
                .should('be.visible')
                .and('contain', 'Username and Password do not match')
        })
    }

}

const loginPage = new LoginPage()
export default loginPage;