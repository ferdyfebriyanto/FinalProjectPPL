describe('Test Skenario 1', () => {
    it('Success Edit', () => {
        cy.visit('http://lms.polinema.ac.id/login/index.php')
        cy.get('#username')
            .type('1941720007')
            .should('have.value', '1941720007')
        cy.get('#password')
            .type('1941720007')
            .should('have.value', '1941720007')
        cy.get('#loginbtn').click()
    })
})