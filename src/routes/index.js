import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Quiz from '../components/Quiz';

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/:quizName" component={Quiz} />
  </Switch>
);
