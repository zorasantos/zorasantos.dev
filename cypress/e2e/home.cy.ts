describe('Home Page', () => {
  it('Switches to the article page.', () => {
    cy.visit('http://localhost:3000')
    cy.get('#api-node-desacoplada-parte-01').click()
    cy.url().should('include', '/posts/api-node-desacoplada-parte-01')
    cy.wait(2000)
    cy.get('#configurando-o-typescript').click()
    cy.wait(1000)
    cy.get('[data-cy="page-top"]').click()
  })
})