class DashboardPage {
    constructor() {
        cy.fixture('locator/dashboardPage').as('dashboard')
    }

    verifyProductHeader() {
        cy.get('@dashboard').then(locator => {
            cy.get(locator.productHeader).should('have.text', 'Products')
        })
    }

    navigateToCart () {
        cy.get('@dashboard').then(locator => {
            cy.get(locator.cartLink).click()
        })
    }

    verifyCartPage () {
        cy.get('@dashboard').then(locator => {
            cy.get(locator.cartTitle).should('contain.text', 'Your Cart')
        })
    }

    openMenu () {
        cy.get('@dashboard').then(locator => {
            cy.get(locator.menuButton).click()
            cy.get(locator.menuSidebar).should('be.visible')
        })
    }
}