describe('empty spec', () => {
  it('Loads page', () => {
    cy.visit('http://127.0.0.1:5500')
  })

  it('Checks every button', () => {
    cy.get("[data-cy=a_1]");
    cy.get("[data-cy=b_1]");
    cy.get("[data-cy=c_1]");
    cy.get("[data-cy=a_2]");
    cy.get("[data-cy=b_2]");
    cy.get("[data-cy=c_2]");
    cy.get("[data-cy=a_3]");
    cy.get("[data-cy=b_3]");
    cy.get("[data-cy=c_3]");

    cy.get("[data-cy=reset]");
  })
})