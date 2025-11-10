/// <reference types="cypress" />

describe('Product Details Page', () => {
  beforeEach(() => {
    cy.visit('/product/1');
    
    cy.url({ timeout: 10000 }).should('include', '/product/');
    cy.wait(1000);
  });

  it('should load the product details page successfully', () => {
    cy.url().should('include', '/product/');
  });
});

