describe('Edit Profile Scenario - 1941720007 / Ferdy Febriyanto', () => {
    it('Edit Profile Berhasil', () => {
        cy.visit('http://lms.polinema.ac.id/login/index.php')
        cy.get('#username')
            .type('1941720007')
            .should('have.value', '1941720007')
        cy.get('#password')
            .type('1941720007')
            .should('have.value', '1941720007')
        cy.get('#loginbtn').click()

        cy.url().should('include', '/my/')

        cy.get('.usermenu').contains('#actionmenuaction-2').click()
    })
})