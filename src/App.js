import React from 'react';
import './App.scss';
import data from './data/dummy.json';

const App = () => {
  return (
    <div className="App">
      <ol>
        {data.map((question, id) => {
          return <li key={id}>{question.text}</li>;
        })}
      </ol>
    </div>
  );
};

export default App;
