Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  });

  Cypress.Commands.add('login', (username=Cypress.env('username'), password=Cypress.env('password'))/* , () */ => {
    cy.session([username=Cypress.env('username'), password=Cypress.env('password')], () => {
      cy.visit('/');
      cy.get('#signin').click();
      cy.get('#username > div > div.css-1hwfws3 > div.css-1wa3eu0-placeholder').click();
      cy.get('#react-select-2-option-0-0').click();
      cy.get('#password > div > div.css-1hwfws3 > div.css-1wa3eu0-placeholder').click();
      cy.get('#react-select-3-option-0-0').click();
      cy.get('#login-btn').click();
      cy.get('#logout').should('be.visible');
    },
    {
      cacheAcrossSpecs: true
    });
  });

  Cypress.Commands.add('logout', () => {
    cy.visit('/');
    cy.get('#logout').should('be.visible').click();
    cy.get('#signin').should('be.visible');
    cy.get('#logout').should('not.exist');
  })