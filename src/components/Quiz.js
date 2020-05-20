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
    const questionIds = Object.keys(answers || {});
    console.log('questionIds', questionIds);
    const currentQuestionId =
      questionIds &&
      questionIds.filter(id => Number(id) === Number(e.target.name))[0];

    let checkedAnswer;
    if (currentQuestionId === e.target.name) {
      const previousSelectedAnswers = answers[currentQuestionId];
      const isPreviouslySelected = previousSelectedAnswers.filter(
        answer => answer === Number(e.target.value),
      );
      if (isPreviouslySelected.length) {
        const removePreviousAnswer = previousSelectedAnswers.filter(
          answer => answer !== Number(e.target.value),
        );
        checkedAnswer = {
          [e.target.name]: removePreviousAnswer,
        };
      } else {
        checkedAnswer = {
          [e.target.name]: [...previousSelectedAnswers, Number(e.target.value)],
        };
      }
    } else {
      checkedAnswer = { [e.target.name]: [Number(e.target.value)] };
    }
    return checkedAnswer;
  };

  const handleAnswerSelect = (e, type) => {
    const answers = userAnswers;
    let selectedAnswer;
    if (Object.keys(answers).length && type === 'checkbox') {
      selectedAnswer = handleCheckboxAnswers(e, answers);
    } else {
      selectedAnswer = { [e.target.name]: [Number(e.target.value)] };
    }
    setUserAnswers({ ...userAnswers, ...selectedAnswer });
  };

  const checkUserAnswers = e => {
    e.preventDefault();
    const totalScore = questions.reduce((point, question) => {
      const selectedAnswer = userAnswers[question.id];
      const correctAnswer = question.answers
        .filter(ans => ans.isCorrect)
        .map(correctAns => correctAns.id);

      let isRight = false;
      if (selectedAnswer.length === correctAnswer.length) {
        isRight = selectedAnswer.every(
          answer => correctAnswer.indexOf(answer) !== -1,
        );
      }
      return isRight ? point + 1 : point;
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
