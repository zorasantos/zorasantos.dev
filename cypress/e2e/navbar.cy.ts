describe('Navbar', () => {
  it('Navigate between pages', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="about"]').click()
    cy.wait(2000)
    cy.get('[data-cy="portfolio"]').click()
    cy.wait(2000)
    cy.get('[data-cy="logo"]').click()
  })
})