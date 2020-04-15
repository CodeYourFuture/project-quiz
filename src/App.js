import React, { useState } from 'react';
import './App.scss';
import data from './data/dummy.json';
import {
  Button,
  Card,
  Container,
  Col,
  Jumbotron,
  Form,
  Badge,
} from 'react-bootstrap';

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
      <h1 className="text-center">
        <Badge variant="secondary">CYF Quiz</Badge>
      </h1>
      <Form onSubmit={checkUserAnswers}>
        {data.map(question => {
          return (
            <Card>
              <Form.Group key={question.id}>
                <Jumbotron>{question.text}</Jumbotron>
                {question.answers.map(answer => {
                  return (
                    <Container>
                      <Form.Check type="radio">
                        <hr />
                        <Form.Row key={answer.id}>
                          <Form.Label
                            as={Col}
                            htmlFor={`${question.id}.${answer.id}`}
                            aria-label="radio"
                          >
                            <Form.Check.Input
                              type="radio"
                              id={`${question.id}.${answer.id}`}
                              name={question.id}
                              value={answer.id}
                              onClick={handleAnswerSelect}
                            />
                            {answer.text}
                          </Form.Label>
                        </Form.Row>
                      </Form.Check>
                    </Container>
                  );
                })}
              </Form.Group>
            </Card>
          );
        })}
        {shouldDisplayScore && (
          <h2 className="text-center d-flex justify-content-center">
            <Badge variant="secondary">
              You have got {score} out of {data.length}
            </Badge>
          </h2>
        )}
        {Object.keys(userAnswers).length === data.length && (
          <span className="d-flex justify-content-center">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </span>
        )}
      </Form>
    </Container>
  );
};

export default App;
