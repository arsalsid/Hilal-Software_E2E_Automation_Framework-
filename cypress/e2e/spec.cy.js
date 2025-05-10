import loginPage from "../pages/loginPage"
import dashboardPage from "../pages/dashboardPage"

describe('Login & Dashboard Navigation', () => {
  let locator;
  let testData;

  before(() => {

    cy.fixture('locators/loginPage').then(data => {
      loginPage.setlocators(data);
    });

    cy.fixture('locators/dashboardPage').then(data => {
      dashboardPage.setlocators(data);
    });

    cy.fixture('testData/loginUsers').then(data => {
      testData = data;
    });
  });

  beforeEach (() => {
    loginPage.visit()
  });

  it('Login with valid credentials and verify dashboard', () => {
    loginPage.login(testData.validUser.username, testData.validUser.password, locator);
    dashboardPage.verifyProductHeader(locator);
  });

  it('Login with Invalid credentials and assert error', () => {
    loginPage.login(testData.validUser.username, testData.validUser.password, locator);
    loginPage.assertInvalidLogin(locator);
  });

  it('Login with blank fields and assert error', () => {
    loginPage.login(" "," ", locator); //Blank username and password
    loginPage.assertInvalidLogin(locator);
  });

  it('Navigate to cart and validate cart page', () => {
    loginPage.login(testData.validUser.username, testData.validUser.password, locator);
    dashboardPage.navigateToCart(locator);
    dashboardPage.verifyCartPage(locator);
  });

  it('Unauuthorized access attempt (no login)', () => {
    dashboardPage.assertUnauthorizedAccess(locator);
  });

  it('Open menu sidebar and assert visibility ', () => {
    loginPage.login(testData.validUser.username, testData.validUser.password, locator);
    dashboardPage.verifyMenuNavigation(locator);
  });

});