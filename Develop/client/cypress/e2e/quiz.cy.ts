describe('Quiz Page', () => {
  it('loads the quiz page and starts the quiz', () => {
    cy.visit('/');
    cy.contains('Start Quiz').click();
    cy.url().should('include', '/quiz');
  });

  it('allows user to answer a question and view score', () => {
    cy.visit('/quiz');
    cy.get('.question').should('exist');
    cy.get('.option').first().click();
    cy.contains('Next').click();
    cy.contains('Your Score').should('exist');
  });
});
