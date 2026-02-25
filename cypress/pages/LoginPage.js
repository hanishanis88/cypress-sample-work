class LoginPage {

  visit() {
    cy.visit(Cypress.config('baseUrl'));
  }

  enterUsername(username) {
    cy.get('[data-test="username"]').clear().type(username);
  }

  enterPassword(password) {
    cy.get('[data-test="password"]').clear().type(password);
  }

  clickLogin() {
    cy.get('[data-test="login-button"]').click();
  }

  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }

  getErrorMessage() {
    return cy.get('[data-test="error"]');
  }

}

export default LoginPage;