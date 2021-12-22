describe('Login', function (){
    beforeEach(() => {        
        cy.visit('http://lms.polinema.ac.id/login/index.php')
        // Halaman Login
        cy.get('#username').type('1941720147')
        // Input Username
        cy.get('#password').type('1941720147')
        // Input Password                
        cy.get('[class="btn btn-primary btn-block m-t-1"]').should('be.visible').click()   
        // Button Login
    })
    it('Change Password Dengan Huruf', () => {  
        cy.visit('http://lms.polinema.ac.id/user/preferences.php')
        // Masuk Halaman Pengaturan
        cy.visit('http://lms.polinema.ac.id/login/change_password.php?id=1')
        // Masuk Halaman Change Password
        cy.get('#id_password').type('1941720147')
        // Input Current Password
        cy.get('#id_newpassword1').type('malangan')
        // Input New Password 1
        cy.get('#id_newpassword2').type('malangan')
        // Input New Password 2
        cy.get('#id_submitbutton').should('be.visible').click()
        // Button Submit 
         cy.get('[class="btn btn-primary"]').should('be.visible').click()   
        // Button Countineu
    })
})    
    