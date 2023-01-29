describe('empty spec', () => {
  it('Loads page', () => {
    cy.visit('http://127.0.0.1:5500')
  })

  it('Checks text on screen', () => {
    cy.get('h1').should('have.text', 'Tic-Tac-Toe');
  })
})