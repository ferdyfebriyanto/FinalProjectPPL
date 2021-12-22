describe('Login', function (){
    beforeEach(() => {
           cy.visit('http://lms.polinema.ac.id/login/index.php')
        // Halaman Login
        cy.get('[class="btn btn-primary btn-block m-t-1"]').should('be.visible').click()   
        // Button Login
    })
    
    it('Grades', () => {  
        
        cy.visit('http://lms.polinema.ac.id/course/view.php?id=762')
        // Masuk Halaman Course         
        cy.get('[class="btn btn-primary"]').should('be.visible').click()
        // Button Continue
    })
    
})