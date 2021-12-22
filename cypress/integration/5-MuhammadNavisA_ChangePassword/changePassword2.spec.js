describe('Login', function (){
    beforeEach(() => {        
        cy.visit('http://lms.polinema.ac.id/login/index.php')
        // Halaman Login
        cy.get('#username').type('1941720147')
        // Input Username
        cy.get('#password').type('malangan')
        // Input Password                
        cy.get('[class="btn btn-primary btn-block m-t-1"]').should('be.visible').click()   
        // Button Login
    })
    it('Change Password Dengan Angka', () => {  
        cy.visit('http://lms.polinema.ac.id/user/preferences.php')
        // Masuk Halaman Pengaturan
        cy.visit('http://lms.polinema.ac.id/login/change_password.php?id=1')
        // Masuk Halaman Change Password
        cy.get('#id_password').type('malangan')
        // Input Current Password
        cy.get('#id_newpassword1').type('1941720147')
        // Input New Password 1
        cy.get('#id_newpassword2').type('1941720147')
        // Input New Password 2
        cy.get('#id_submitbutton').should('be.visible').click()
        // Button Submit 
        cy.get('[class="btn btn-primary"]').should('be.visible').click()   
        // Button Countineu
    })
})