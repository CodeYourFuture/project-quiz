import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import Footer from './components/Footer';

import './App.scss';

const App = () => {
  return (
    <Router>
      <Routes />
      <Footer />
    </Router>
  );
};

export default App;
