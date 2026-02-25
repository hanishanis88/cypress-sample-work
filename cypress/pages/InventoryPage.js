class InventoryPage {

  addRandomItem(generateRandomIndex) {
    cy.get('.inventory_item').then(items => {
      const randomIndex = generateRandomIndex(items.length);
      cy.wrap(items).eq(randomIndex).find('button').click();
    });
  }

  getAllPrices() {
    return cy.get('.inventory_item_price');
  }

  clickCart() {
    cy.get('.shopping_cart_link').click();
  }

  verifyItemAdded() {
    cy.get('.cart_item').should('have.length.at.least', 1);
  }

}

export default InventoryPage;