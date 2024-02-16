import React, { useState } from 'react';
import './index.css';
import './App.css';

const questions = [
  {
    question: 'The Country that first experiences the New Year every year is?',
    options: ['America', 'Russia', 'Asmoa', 'Samoa'],
    correctAnswer: 'Samoa'
  },
  {
    question: 'Where is mountain Kilimanjaro located?',
    options: ['Kenya', 'Guinea', 'Tanzania', 'India'],
    correctAnswer: 'Tanzania'
  },
  {
    question: 'A narrow water pointing to the land is called?',
    options: ['Lake', 'Peninsula', 'Island', 'Cave'],
    correctAnswer: 'Cave'
  },
  {
    question: 'A hole naturally carved into a large mountain is called?',
    options: ['Cave', 'Crater', 'Dike', 'Pipe'],
    correctAnswer: 'Cave'
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion === questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption('');
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption('');
  };

  return (
    <div className="App">
      <h1>Who Sabi Geography</h1>
      {!showResult ? (
        <>
          <h2>Question {currentQuestion + 1}</h2>
          <p className="question">{questions[currentQuestion].question}</p>
          <div>
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleOptionClick(option)}>{option}</button>
            ))}
          </div>
          <button className="nxt" onClick={handleNextQuestion} disabled={!selectedOption}>Next</button>
        </>
      ) : (
        <>
          <h2>Result</h2>
          <p>You scored {score} out of {questions.length}</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </>
      )}
    </div>
  );
}

export default App;
