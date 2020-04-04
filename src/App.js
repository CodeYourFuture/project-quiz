import React from 'react';
import './App.scss';
import data from './data/dummy.json';

const App = () => {
  return (
    <div>
      <ol>
        {data.map(question => {
          return <li key={question.id}>{question.text}</li>;
        })}
      </ol>
    </div>
  );
};

export default App;
