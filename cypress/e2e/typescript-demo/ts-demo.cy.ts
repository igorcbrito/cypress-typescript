let url:string = 'https://practicetestautomation.com/logged-in-successfully/'

describe('TS DEMO', () => {
    
    it('Success Login Without Custom Commands', () => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('#username').type('student');
        cy.get('#password').type('Password123');
        cy.get('#submit').click();

        cy.url().should('eq', url)
    });

    it('Success Login with Custom Command', () =>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.typeLogin('student', 'Password123')
        cy.url().should('eq', url)
    });

});