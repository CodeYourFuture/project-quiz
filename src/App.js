import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import Home from './components/Home';
import './App.scss';

const App = () => {
  return (
    <Router>
      <Routes component={Home} path='home' />
    </Router>
  );
};

export default App;
