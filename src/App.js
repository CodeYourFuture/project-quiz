import React, { useState } from 'react';
import './App.scss';
import data from './data/dummy.json';

const App = () => {
  const [response, setResponse] = useState({});
  const [score, setScore] = useState(0);
  const [displayScore, setDisplayScore] = useState(false);

  const handleResponse = e => {
    const selectedAnswer = { [e.target.name]: e.target.value };
    setResponse({ ...response, ...selectedAnswer });
  };

  const checkAnswers = e => {
    e.preventDefault();
    const handleScore = data
      .map(question => {
        const responseAnswerId = response[question.id];
        const responseObj = question.answers.find(
          answer => answer.id === Number(responseAnswerId),
        );
        return responseObj.isCorrect;
      })
      .filter(item => item).length;
    setScore(handleScore);
    setDisplayScore(true);
  };

  return (
    <form onSubmit={checkAnswers}>
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
                    onClick={handleResponse}
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
      {Object.keys(response).length === data.length && <button>Submit</button>}
      {displayScore && (
        <h2>
          You have got {score} out of {data.length}
        </h2>
      )}
    </form>
  );
};

export default App;
