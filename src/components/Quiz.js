import React, { useState } from 'react';
import data from '../data/dummy.json';
import { Button, Form, Container, Jumbotron } from 'react-bootstrap';
import Question from './Question';

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [shouldDisplayScore, setShouldDisplayScore] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswerSelect = e => {
    const selectedAnswer = { [e.target.name]: Number(e.target.value) };
    setUserAnswers({ ...userAnswers, ...selectedAnswer });
  };

  const checkUserAnswers = e => {
    e.preventDefault();
    const totalScore = data.reduce((point, question) => {
      const selectedAnswerId = userAnswers[question.id];
      const selectedAnswerObj = question.answers.find(
        answer => answer.id === selectedAnswerId,
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
        <Question
          key={data[currentQuestionIndex].id}
          question={data[currentQuestionIndex]}
          handleAnswerSelect={handleAnswerSelect}
        />
        <Button
          variant="secondary"
          disabled={currentQuestionIndex === 0}
          onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
        >
          Previous
        </Button>
        <Button
          variant="secondary"
          disabled={currentQuestionIndex === data.length - 1}
          onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
        >
          Next
        </Button>
        {shouldDisplayScore && (
          <Jumbotron>
            <h2>
              You have got {score} out of {data.length}
            </h2>
          </Jumbotron>
        )}
        {Object.keys(userAnswers).length === data.length && (
          <Button variant="primary" type="submit">
            Submit
          </Button>
        )}
      </Form>
    </Container>
  );
};

export default Quiz;
