import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import './App.scss';

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes />
      <Footer />
    </Router>
  );
};

export default App;
