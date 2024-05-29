describe('Test Funcionalidad del Re-Captcha en Login', () => {
  it('Visits the Kitchen Sink', () => {
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    
    cy.visit('http://localhost:8080/login');

    cy.get('#user-name').click();
    cy.get('#user-name').type('test@test.com');
    cy.get('#user-password').click();
    cy.get('#user-password').type('123456');
    cy.get('.v-btn').click();
    cy.get('.v-form').submit();

  })
})