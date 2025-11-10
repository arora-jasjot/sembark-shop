/// <reference types="cypress" />

describe('Cart Page', () => {
  beforeEach(() => {
    cy.visit('/cart');
  });

  it('should load the cart page successfully', () => {
    cy.url().should('include', '/cart');
    cy.url().should('eq', Cypress.config().baseUrl + '/cart');
  });

  it('should display cart totals section', () => {
    cy.scrollTo(0, 300);
    cy.contains('Cart Totals').should('be.visible');
  });

});

