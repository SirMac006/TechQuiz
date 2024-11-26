import { mount } from 'cypress/react';
import Quiz from '../../src/components/Quiz';

describe('Quiz Component', () => {
  it('renders correctly with no questions', () => {
    const emptyQuestions: { question: string; answers: { text: string; isCorrect: boolean; }[]; }[] = [];
    mount(<Quiz questions={emptyQuestions} />);
    cy.contains('Quiz');
  });

  it('displays questions and answers', () => {
    const mockQuestions: { question: string; answers: { text: string; isCorrect: boolean; }[]; }[] = [
      {
        question: 'What is TypeScript?',
        answers: [
          { text: 'Language', isCorrect: true },
          { text: 'Framework', isCorrect: false },
        ],
      },
    ];

    mount(<Quiz questions={mockQuestions} />);

    // Check if the question text is displayed
    cy.contains('What is TypeScript?');
  });

  it('checks if the correct answer is selectable', () => {
    const mockQuestions = [
      {
        question: 'What is JavaScript?',
        answers: [
          { text: 'A programming language', isCorrect: true },
          { text: 'A database', isCorrect: false },
        ],
      },
    ];

    mount(<Quiz questions={mockQuestions} />);

    // Simulate clicking an option
    cy.get('.option').first().click();

    // Add any additional assertions if your component provides feedback (e.g., showing correct/incorrect)
    cy.get('.option').first().should('contain.text', 'A programming language');
  });
});
