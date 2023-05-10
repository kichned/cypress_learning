describe('Test login', () => {
    beforeEach(() => {
        cy.login();
    });

    afterEach(() => {
        cy.logout();
    });
    
    it('add iPhone', () => {
        cy.visit('/');
        cy.get('.checkmark').contains('Apple').click();
        cy.get('#\\31  > div.shelf-item__buy-btn').should('be.visible').click();
        cy.get('.shelf-item__details > .title').contains('iPhone 12');
        cy.get('.buy-btn').should('have.text', 'Checkout').click();
        cy.get('#firstNameInput').should('be.visible').clear().type('Vasya');
        cy.get('#lastNameInput').should('be.visible').clear().type('Pupkin');
        cy.get('#addressLine1Input').should('be.visible').clear().type('Atlantida');
        cy.get('#provinceInput').should('be.visible').clear().type('Atlantida');
        cy.get('#postCodeInput').should('be.visible').clear().type('2345667');
        cy.get('#checkout-shipping-continue').should('be.visible').click();
        cy.get('#downloadpdf').click();
        cy.verifyDownload('.pdf', { contains: true });
        cy.get('.button').should('be.visible').and('exist').click();
    });
})