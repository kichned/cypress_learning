it('login', () => {
    cy.visit('/');
      cy.get('#signin').click();
      cy.get('#username > div > div.css-1hwfws3 > div.css-1wa3eu0-placeholder').click();
      cy.get('#react-select-2-option-0-0').click();
      cy.get('#password > div > div.css-1hwfws3 > div.css-1wa3eu0-placeholder').click();
      cy.get('#react-select-3-option-0-0').click();
      cy.get('#login-btn').click();
      cy.get('#logout').should('be.visible');
})

