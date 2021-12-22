/// <reference types="cypress" />

describe('Home Page Scenario - 1941720168 / Oudessya Balqist Wibowo', () => {

    beforeEach(() => {
            cy.visit('/')
    })

    it('Button Drawer Test', () => { 
        cy.get('[data-region="drawer-toggle"] > .btn').click()
        cy.wait(2000)
        cy.get('.list-group-item').click()
    })

    it('Logo Polinema Test', () => {
        cy.get('.logo > img').click()
    })

    it('Button New Course Testing', () => {
        cy.get(':nth-child(1) > .fp-coursebox > .fp-courseinfo > .readmore > a').click()
        cy.wait(2000)
        cy.get('.m-t-1 > [href="http://lms.polinema.ac.id/"]').click()
    })

    it('Button Site News Test', () => {
        cy.contains('Site news').click()
        cy.wait(2000)
        cy.get('[data-region="drawer-toggle"] > .btn').click()

    })

    it('Calendar Testing', () => {
        cy.get('.current > a').click()
        cy.wait(2000)
        cy.get('.previous > .arrow').click()
        cy.wait(2000)
        cy.get('.next > .arrow').click()
        cy.get('[data-region="drawer-toggle"] > .btn').click()
        cy.get('.list-group-item').click()
    })

    it('Course Categories Testing', () => {
        cy.get('[data-categoryid="2"] > .info > .categoryname > a').click()
        cy.wait(2000)
        cy.get('[data-region="drawer-toggle"] > .btn').click()
        cy.get('.list-group-item').click()
    })


})