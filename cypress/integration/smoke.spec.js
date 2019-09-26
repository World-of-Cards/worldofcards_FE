context('Smoke', () => {
  it('smoke test', () => {
    cy.visit('localhost:3000')
      .contains('Hello, World!')
      .should('exist');
  });
});
