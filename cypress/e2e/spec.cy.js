describe('checking vbet logo', () => {
  it('passes', () => {
    cy.visit('https://vbet.am/');
    cy.get('.hdr-logo-bc').should('be.visible');
  })
})