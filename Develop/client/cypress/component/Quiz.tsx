import React from 'react';

interface Answer {
  text: string;
  isCorrect: boolean;
}

interface Question {
  question: string;
  answers: Answer[];
}

interface QuizProps {
  questions: Question[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  return (
    <div>
      <h1>Quiz</h1>
      {questions.map((q, index) => (
        <div key={index}>
          <h2>{q.question}</h2>
          <ul>
            {q.answers.map((a, i) => (
              <li key={i}>{a.text}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Quiz;
