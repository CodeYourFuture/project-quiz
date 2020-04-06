import React from 'react';
import './App.scss';
import data from './data/dummy.json';

const App = () => {
  return (
    <form>
      {data.map(question => {
        return (
          <div key={question.id}>
            <legend>{question.text}</legend>

            {question.answers.map(answer => {
              return (
                <div key={answer.id}>
                  <input
                    type="radio"
                    id={`${question.id}.${answer.id}`}
                    name={question.id}
                    value={answer.id}
                  />
                  <label htmlFor={`${question.id}.${answer.id}`}>
                    {answer.text}
                  </label>
                </div>
              );
            })}
          </div>
        );
      })}
    </form>
  );
};

export default App;
