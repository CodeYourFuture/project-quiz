import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import './App.scss';
import data from './data/dummy.json';
import { Button, Form, Container, Jumbotron } from 'react-bootstrap';

const App = () => {
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [shouldDisplayScore, setShouldDisplayScore] = useState(false);

  const handleAnswerSelect = e => {
    const selectedAnswer = { [e.target.name]: e.target.value };
    setUserAnswers({ ...userAnswers, ...selectedAnswer });
  };

  const checkUserAnswers = e => {
    e.preventDefault();
    const totalScore = data.reduce((point, question) => {
      const selectedAnswerId = userAnswers[question.id];
      const selectedAnswerObj = question.answers.find(
        answer => answer.id === Number(selectedAnswerId),
      );
      return selectedAnswerObj.isCorrect ? point + 1 : point;
    }, 0);
    setScore(totalScore);
    setShouldDisplayScore(true);
  };

  return (
    <Container>
      <h1>CYF Quiz</h1>
      <Form onSubmit={checkUserAnswers}>
        {data.map(question => {
          return (
            <fieldset key={question.id}>
              <Jumbotron>
                <h2>{question.text}</h2>
                <Form.Group key={question.id}>
                  {question.answers.map(answer => {
                    return (
                      <Form.Check
                        key={answer.id}
                        type={question.type}
                        id={`${question.id}.${answer.id}`}
                        name={question.id}
                        value={answer.id}
                        onClick={handleAnswerSelect}
                        label={`${answer.text}`}
                      />
                    );
                  })}
                </Form.Group>
              </Jumbotron>
            </fieldset>
          );
        })}
        {shouldDisplayScore && (
          <Jumbotron>
            <h2>
              {' '}
              You have got {score} out of {data.length}{' '}
            </h2>
          </Jumbotron>
        )}
        {Object.keys(userAnswers).length === data.length && (
          <Button variant="primary" type="submit">
            Submit
          </Button>
        )}
      </Form>

      <Router>
        <Routes />
      </Router>
    </Container>
  );
};

export default App;
