import loginPage from "../pages/loginPage"
describe('template spec', () => {

  beforeEach (() =>{
    loginPage.visit()
  });

  it('should display the correct page title', () => {
    cy.title().should('eq', 'Swag Labs')
    cy.log('Title of page fetched');
  })
})