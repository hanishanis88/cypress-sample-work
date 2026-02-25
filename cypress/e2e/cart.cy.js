import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import { generateRandomIndex, calculateCartTotal } from '../utils/helpers';

describe('SauceDemo Advanced Cart Test', () => {

  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();

  beforeEach(() => {
    loginPage.visit();
    cy.fixture('user').then((user) => {
      loginPage.login(user.validUser.username, user.validUser.password);
    });
  });

  it('should add random item and validate price logic', () => {

    inventoryPage.addRandomItem(generateRandomIndex);
    inventoryPage.clickCart();
    inventoryPage.verifyItemAdded();

    inventoryPage.getAllPrices().then(elements => {
      const prices = [...elements].map(el => el.innerText);
      const total = calculateCartTotal(prices);

      expect(total).to.be.greaterThan(0);
    });

  });

});