import React from 'react';
import './App.scss';
import data from './data/dummy.json';

const App = () => {
  return (
    <div>
      <ol>
        {data.map((question) => {
          return <div>
            <li key={question.id}>{question.text}</li>
            <ul>{question.answers.map((answer) => {
              return <li key={answer.id}>{answer.text}</li>
            })}
            </ul>
          </div>
        })}
      </ol>
    </div>
  );
};

export default App;
