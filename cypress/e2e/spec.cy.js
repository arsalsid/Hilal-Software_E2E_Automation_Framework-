import loginPage from "../pages/loginPage"
describe('Login & Dashboard Navigation', () => {
  let testData;

  before(() => {
    cy.fixture('testData/loginUsers').then(data => {
      testData = data;
    })
  });

  beforeEach (() => {
    loginPage.visit()
  });

  it('should display the correct page title', () => {
    cy.title().should('eq', 'Swag Labs')
    cy.log('Title of page fetched');
  })
})