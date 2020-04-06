import React from 'react';
import './App.scss';
import data from './data/dummy.json';

const App = () => {
  return (
    <div>
      <form>
        <ol>
          {data.map(question => {
            return (
              <div>
                <li key={question.id}>{question.text}</li>

                {question.answers.map(answer => {
                  return (
                    <div>
                      <input
                        type="radio"
                        id={`${question.id}.${answer.id}`}
                        name={question.id}
                        value={answer.id}
                      />
                      <label for={`${question.id}.${answer.id}`}>
                        {answer.text}
                      </label>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </ol>
      </form>
    </div>
  );
};

export default App;
