import React, { useState } from 'react';
import './App.scss';
import data from './data/dummy.json';

const App = () => {
  const [response, setResponse] = useState({});

  const handleResponse = e => {
    const selectedAnswer = { [e.target.name]: e.target.value };
    setResponse({ ...response, ...selectedAnswer });
    console.log(selectedAnswer);
  };

  return (
    <form>
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
    </form>
  );
};

export default App;
