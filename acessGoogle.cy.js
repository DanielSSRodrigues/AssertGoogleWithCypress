//Valida Título do google
describe('AcessaGoogle', () => {
  it('AssertivaNoTitulo', () => {
    cy.visit('https://www.google.com/')
    cy.title().should('eq', 'Google')      
  })
})