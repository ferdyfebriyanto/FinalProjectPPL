/// <reference types="cypress" />

describe('Login Scenario - 1941720173 / Sesha Dwi Lestari', () => {

    describe('Login Page', () => {

        beforeEach(() => {
            cy.visit('/')
        })

        it('Invalid Username & Valid Password', () => { 
            cy.get('.login > a').click()
            cy.get('#username').type('user')
            cy.get('#password').type('#')
            cy.get('#loginbtn').click()
        })

        it('Valid Username & Invalid Password', () => { 
            cy.get('.login > a').click()
            cy.get('#username').type('#')
            cy.get('#password').type('password')
            cy.get('#loginbtn').click()
        })

        it('Test Button Log In As A Guest', () => { 
            cy.get('.login > a').click()
            cy.get('#guestlogin > .btn').click()
        })

        it('Valid Username & Valid Password', () => { 
            cy.get('.login > a').click()
            cy.get('#username').type('#')
            cy.get('#password').type('#')
            cy.get('#loginbtn').click()
         })

    })

    describe('Component Test', () => {

        beforeEach(() => {
            cy.visit('/')
        })

        it('Click Polinema Icon', () => { 
            cy.get('.login > a').click()
            cy.get('#username').type('#')
            cy.get('#password').type('#')
            cy.get('#loginbtn').click()
            cy.get('.logo > img').click()        
        })

        it('Click Courses Item', () => {
            cy.get('.login > a').click()
            cy.get('#username').type('#')
            cy.get('#password').type('#')
            cy.get('#loginbtn').click()
            cy.get('div.list-group-item > .m-l-0').click
        })

    })

})