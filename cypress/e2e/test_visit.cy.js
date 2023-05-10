describe('My first test', () => {
    beforeEach(() => {
        cy.visit("/")
    })

    it("visit base url", () => {
        cy.get('.category-cards > :nth-child(6)').click()
        cy.get(':nth-child(6) > .element-list > .menu-list > #item-0').click()
        /* cy.get('#newUser').click()
        cy.get('#firstname').clear().type('vasya')
        cy.get('#lastname').clear().type('pupkin')
        cy.get('#userName').clear().type('vasya123')
        cy.get('#password').clear().type('123Vasya')
        cy.get('[style="width: 304px; height: 78px;"] > div > iframe').find('.recaptcha-checkbox-border').click()
        cy.get('#register').click() */
        cy.get('#userName').type(Cypress.env('email'))
        cy.get('#password').type(Cypress.env('password'))
        cy.get('#login').click()
        
    });


})