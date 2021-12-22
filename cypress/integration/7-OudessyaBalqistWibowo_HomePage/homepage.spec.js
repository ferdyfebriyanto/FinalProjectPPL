/// <reference types="cypress" />

describe('Home Page Scenario - 1941720168 / Oudessya Balqist Wibowo', () => {

    // Melakukan perulangan pada tiap testing
    beforeEach(() => {
            cy.visit('/')
    })

    // Button Drawer Test -> Nama Test Case
    it('Button Drawer Test', () => { 
        cy.get('[data-region="drawer-toggle"] > .btn').click()
        cy.wait(2000)
        cy.get('.list-group-item').click().should('be.visible')
    })

    it('Logo Polinema Test', () => {
        cy.get('.logo > img').click().should('be.visible')
    })

    it('Button New Course Testing', () => {
        cy.get(':nth-child(1) > .fp-coursebox > .fp-courseinfo > .readmore > a').click()
        cy.wait(2000)
        cy.get('.m-t-1 > [href="http://lms.polinema.ac.id/"]').click().should('be.visible')
    })

    it('Button Site News Test', () => {
        cy.contains('Site news').click()
        cy.wait(2000)
        cy.get('[data-region="drawer-toggle"] > .btn').click().should('be.visible')

    })

    it('Calendar Testing', () => {
        cy.get('.current > a').click()
        cy.wait(2000)
        cy.get('.previous > .arrow').click().should('be.visible')
        cy.wait(2000)
        cy.get('.next > .arrow').click().should('be.visible')
        cy.get('[data-region="drawer-toggle"] > .btn').click()
        cy.get('.list-group-item').click().should('be.visible')
    })

    it('Course Categories Testing', () => {
        cy.get('[data-categoryid="2"] > .info > .categoryname > a').click().should('be.visible')
        cy.wait(2000)
        cy.get('[data-region="drawer-toggle"] > .btn').click()
        cy.get('.list-group-item').click().should('be.visible')
    })


})