import React, { useState, useEffect } from 'react';
import Result from './Result';
import Question from './Question';
import { useParams } from 'react-router';
import { retrieveQuizData } from './retrieveQuizData';
import { Button, Form, Container } from 'react-bootstrap';

const Quiz = () => {
  const { quizName } = useParams();
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [shouldDisplayScore, setShouldDisplayScore] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const quizData = retrieveQuizData(quizName);
    setQuestions(quizData);
  }, [quizName]);

  const handleCheckboxAnswers = (e, answers) => {
    let checkedAnswer;
    const answerId = Number(e.target.value);
    const previousSelectedAnswers = answers[e.target.name] || [];
    const isAnswerPreviouslySelected = previousSelectedAnswers.includes(
      answerId,
    );

    if (isAnswerPreviouslySelected) {
      const removePreviousAnswer = previousSelectedAnswers.filter(
        answer => answer !== answerId,
      );
      checkedAnswer = {
        [e.target.name]: removePreviousAnswer,
      };
    } else {
      checkedAnswer = {
        [e.target.name]: [...previousSelectedAnswers, answerId],
      };
    }
    return checkedAnswer;
  };

  const handleAnswerSelect = (e, type) => {
    let selectedAnswer;
    const answerId = Number(e.target.value);
    if (type === 'checkbox') {
      selectedAnswer = handleCheckboxAnswers(e, userAnswers);
    } else {
      selectedAnswer = { [e.target.name]: [answerId] };
    }
    setUserAnswers({ ...userAnswers, ...selectedAnswer });
  };

  const checkUserAnswers = e => {
    e.preventDefault();
    const totalScore = questions.reduce((point, question) => {
      const selectedAnswers = userAnswers[question.id];
      const isCorrect = question.answers.every(
        answer => answer.isCorrect === selectedAnswers.includes(answer.id),
      );
      return isCorrect ? point + 1 : point;
    }, 0);
    setScore(totalScore);
    setShouldDisplayScore(true);
  };

  const quizDisplayText = {
    html: 'HTML',
    css: 'CSS',
    js: 'JavaScript',
  };

  const question = questions[currentQuestionIndex];

  return questions.length === 0 ? (
    <p className="text-center my-5">
      Sorry, there are no questions to display.
    </p>
  ) : (
    <Container>
      <h1>{quizDisplayText[quizName]} quiz</h1>
      {shouldDisplayScore ? (
        <Result
          score={score}
          quizName={quizName}
          questions={questions}
          userAnswers={userAnswers}
          numOfQuestions={questions.length}
        />
      ) : (
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
            disabled={currentQuestionIndex === questions.length - 1}
            onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
          >
            Next
          </Button>
          {Object.keys(userAnswers).length === questions.length && (
            <Button className="mb-4" variant="primary" type="submit">
              Submit
            </Button>
          )}
        </Form>
      )}
    </Container>
  );
};

export default Quiz;
