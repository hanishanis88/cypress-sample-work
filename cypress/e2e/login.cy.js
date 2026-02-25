import LoginPage from '../pages/LoginPage';

describe('SauceDemo Login Tests', () => {

  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('should login successfully with valid credentials', () => {
    cy.fixture('user').then((user) => {
      loginPage.login(user.validUser.username, user.validUser.password);

      cy.url().should('include', '/inventory.html');
      cy.contains('Products').should('be.visible');
    });
  });

  it('should show error message for locked out user', () => {
    cy.fixture('user').then((user) => {
      loginPage.login(user.invalidUser.username, user.invalidUser.password);

      loginPage.getErrorMessage()
        .should('be.visible')
        .and('contain', 'locked out');
    });
  });

});