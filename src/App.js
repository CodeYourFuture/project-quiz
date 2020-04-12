import React, { useState } from 'react';
import './App.scss';
import data from './data/dummy.json';

const App = () => {
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [displayScore, shouldDisplayScore] = useState(false);

  const handleAnswerSelect = e => {
    const selectedAnswer = { [e.target.name]: e.target.value };
    setUserAnswers({ ...userAnswers, ...selectedAnswer });
  };

  const checkUserAnswers = e => {
    e.preventDefault();
    const totalScore = data.reduce((accumulator, question) => {
      const selectedAnswerId = userAnswers[question.id];
      const selectedAnswerObject = question.answers.find(
        answer => answer.id === Number(selectedAnswerId),
      );
      return selectedAnswerObject.isCorrect ? accumulator + 1 : accumulator;
    }, 0);
    console.log(totalScore);
    setScore(totalScore);
    shouldDisplayScore(true);
  };

  return (
    <form onSubmit={checkUserAnswers}>
      {data.map(question => {
        return (
          <fieldset key={question.id}>
            <legend>{question.text}</legend>

            {question.answers.map(answer => {
              return (
                <div key={answer.id}>
                  <input
                    type="radio"
                    id={`${question.id}.${answer.id}`}
                    name={question.id}
                    value={answer.id}
                    onClick={handleAnswerSelect}
                  />
                  <label htmlFor={`${question.id}.${answer.id}`}>
                    {answer.text}
                  </label>
                </div>
              );
            })}
          </fieldset>
        );
      })}
      {Object.keys(userAnswers).length === data.length && (
        <button>Submit</button>
      )}
      {displayScore && (
        <h2>
          You have got {score} out of {data.length}
        </h2>
      )}
    </form>
  );
};

export default App;
