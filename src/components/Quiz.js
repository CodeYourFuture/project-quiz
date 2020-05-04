import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Button, Form, Container, Jumbotron, Spinner } from 'react-bootstrap';
import Question from './Question';
import { retrieveData } from './retrieveData';

const Quiz = () => {
  const { quizName } = useParams();
  const [data, setData] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [shouldDisplayScore, setShouldDisplayScore] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const quizData = retrieveData(quizName);
    setData(quizData);
  }, [quizName]);

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

  const question = data[currentQuestionIndex];

  return data.length === 0 ? (
    <div className="text-center my-5">
      <Spinner animation="border" variant="primary" size="lg" />
    </div>
  ) : (
    <Container>
      <h1>CYF Quiz</h1>
      <Form onSubmit={checkUserAnswers}>
        <Question
          key={question.id}
          question={question}
          handleAnswerSelect={handleAnswerSelect}
          selectedAnswer={userAnswers[question.id]}
        />
        <Button
          className="mr-2 mb-4"
          variant="secondary"
          disabled={currentQuestionIndex === 0}
          onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
        >
          Previous
        </Button>
        <Button
          className="mr-2 mb-4"
          variant="primary"
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
          <Button className="mb-4" variant="primary" type="submit">
            Submit
          </Button>
        )}
      </Form>
    </Container>
  );
};

export default Quiz;
