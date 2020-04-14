import React, { useState } from 'react';
import './App.scss';
import data from './data/dummy.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Container, Row, Col, Jumbotron } from 'react-bootstrap'

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
      <Row>
        <Col> <h1 style={{ textAlign: "center" }} >CYF Quiz</h1>  </Col>
      </Row>
      <Form onSubmit={checkUserAnswers}>
        {data.map(question => {
          return (
            <Jumbotron>
              <Form.Group key={question.id}>
                <legend>{question.text}</legend>
                {question.answers.map(answer => {
                  return (
                    <div key={answer.id}>
                      <Form.Check
                        type={question.type}
                        id={`${question.id}.${answer.id}`}
                        name={question.id}
                        value={answer.id}
                        onClick={handleAnswerSelect}
                        label={`${question.id}.${answer.id}`, `${answer.text}`}
                      />
                    </div>
                  );
                })}
              </Form.Group>
            </Jumbotron>
          );
        })}
        {shouldDisplayScore && (
          <Jumbotron>
            <h2 style={{ textAlign: "center" }} > You have got {score} out of {data.length} </h2>
          </Jumbotron>
        )}
        {Object.keys(userAnswers).length === data.length && (
          <Button variant="primary" type="submit" >Submit</Button>
        )}
      </Form>
    </Container>
  );
};

export default App;
