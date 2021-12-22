describe('Edit Profile Scenario - 1941720007 / Ferdy Febriyanto', () => {
    beforeEach(() => {
        cy.visit('http://lms.polinema.ac.id/login/index.php')
    })
    it('Edit Profile Berhasil', () => {

        cy.get('#username')
            .type('1941720007')
            .should('have.value', '1941720007')
        cy.get('#password')
            .type('1941720007')
            .should('have.value', '1941720007')
        cy.get('#loginbtn').click()

        cy.url().should('include', '/my/')
        cy.contains('Profile').children('i').should('have.class', 'fa-user').click({ force: true })

        cy.visit('/user/edit.php?id=14887&course=1')
    })
})