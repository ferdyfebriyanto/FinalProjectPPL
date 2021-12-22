describe('Login', function (){
    beforeEach(() => {
           cy.visit('http://lms.polinema.ac.id/login/index.php')
        // Halaman Login
        cy.get('#username').type('1941720007')
        // Input Username
        cy.get('#password').type('1941720007')
        // Input Password                
        cy.get('[class="btn btn-primary btn-block m-t-1"]').should('be.visible').click()   
        // Button Login
    })
    
    it('Grades', () => {  
        
        cy.visit('http://lms.polinema.ac.id/course/view.php?id=796')
        // Masuk Halaman Cource Basis Data        
        cy.visit('http://lms.polinema.ac.id/grade/report/index.php?id=796')      
        // Ke halaman Nilai User       

    })
    
})