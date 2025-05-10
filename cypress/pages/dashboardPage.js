class DashboardPage {
    constructor() {
        this.locator = {};
    }

    setlocators(locator) {
        this.locator = locator;
    }

    verifyProductHeader() {
        cy.get(this.locator.productsHeader).should('have.text', 'Products')
        console.log('Locators:', this.locator);
    }

    navigateToCart () {
        cy.get(this.locator.cartLink).click()
        console.log('Locators:', this.locator);
    }

    verifyCartPage () {
        cy.get(this.locator.cartTitle).should('contain.text', 'Your Cart')
        console.log('Locators:', this.locator);
    }

    verifyMenuNavigation () {
        cy.get(this.locator.menuButton).click()
        cy.get(this.locator.menuSidebar).should('be.visible')
        cy.get(this.locator.logout).click()
        console.log('Locators:', this.locator);
    }

    // Negative case: Attempt to access a dashboard without being login
    assertUnauthorizedAccess () {
        cy.get(this.locator.productHeader).should('not.exist')
        cy.url().should('include', '/login') // Assuming it redirects to login page
    }
}

const dashboardPage = new DashboardPage()
export default dashboardPage;