Cypress.Commands.add('typeLogin', (username, password) => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('#submit').click();
})