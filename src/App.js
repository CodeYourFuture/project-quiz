import React from 'react';
import './App.scss';
import data from './data/dummy.json';

const App = () => {
  return (
    <div>
      <ol>
        {data.map((question, id) => {
          return <div>
            <li key={id}>{question.text}</li>
            <ul>{question.answers.map((answer, id) => {
              return <li key={id}>{answer.text}</li>
            })}
            </ul>
          </div>
        })}
      </ol>
    </div>
  );
};

export default App;
