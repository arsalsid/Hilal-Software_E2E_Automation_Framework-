
class LoginPage {

    visit() {
        cy.visit('/')
    }

}

const loginPage = new LoginPage()
export default loginPage;