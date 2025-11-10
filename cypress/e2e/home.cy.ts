/// <reference types="cypress" />

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load the home page successfully', () => {
    cy.url().should('include', '/');
    cy.url().should('satisfy', (url) => {
      return url === Cypress.config().baseUrl + '/' || url.startsWith(Cypress.config().baseUrl + '/?');
    });
  });

  it('should display the navbar with logo and navigation links', () => {
    cy.get('nav img[alt="logo"]').should('be.visible');
    
    cy.contains('Sembark').should('be.visible');
    
    cy.get('nav').within(() => {
      cy.contains('Home').should('be.visible');
      cy.contains('Cart').should('be.visible');
    });
  });

  it('should display products grid', () => {
    cy.wait(2000);
    cy.scrollTo(0, 500);
    
    cy.get('a[href*="/product/"]').should('exist');
    cy.get('a[href*="/product/"]').should('have.length.greaterThan', 0);
  });

  it('should navigate to cart page when cart link is clicked', () => {
    cy.contains('Cart').click();
    cy.url().should('include', '/cart');
  });

  it('should navigate to product details when a product is clicked', () => {
    // Wait for products to load
    cy.wait(2000);
    cy.scrollTo(0, 500);
    
    // Click on first product
    cy.get('a[href*="/product/"]').first().then(($link) => {
      if ($link.length > 0) {
        cy.wrap($link).click();
        cy.url().should('include', '/product/');
      }
    });
  });
});

