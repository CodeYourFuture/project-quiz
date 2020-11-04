import React from 'react';
import { Button, Card, Form, Container } from 'react-bootstrap';

const getAnswersClass = (question, userAnswers, answer) => {
  if (answer.isCorrect) {
    return 'bg-success text-white';
  } else if (userAnswers[question._id].includes(answer._id)) {
    return 'bg-danger text-white';
  } else {
    return 'bg-light';
  }
};

const getAnswersMark = (question, userAnswers, answer, selectedAnswers) => {
  if (answer.isCorrect) {
    if (selectedAnswers.includes(answer._id)) {
      return (
        <span className="empty-ballotBox">
          <span className="check-mark"></span>
        </span>
      );
    } else {
      return <span className="empty-ballotBox"></span>;
    }
  } else if (userAnswers[question._id].includes(answer._id)) {
    return (
      <span className="empty-ballotBox">
        <span className="cross-mark"></span>
      </span>
    );
  } else {
    return <span className="empty-ballotBox"></span>;
  }
};

const ReviewAnswers = ({
  score,
  questions,
  quizName,
  userAnswers,
  numOfQuestions,
}) => {
  return (
    <Container>
      <p>
        Your score is: {score} / {numOfQuestions}
      </p>
      {questions.map(question => (
        <Card key={question._id} className="mb-4">
          <Card.Header as="h2" className="h5">
            {question.text}
          </Card.Header>
          <Card.Body className="bg-white">
            <ul className="list-unstyled">
              {question.answers.map(answer => {
                const selectedAnswers = userAnswers[question._id];
                return (
                  <li
                    style={{
                      borderBottom: '1px solid white',
                      position: 'relative',
                    }}
                    key={answer._id}
                    className={getAnswersClass(question, userAnswers, answer)}
                  >
                    {getAnswersMark(
                      question,
                      userAnswers,
                      answer,
                      selectedAnswers,
                    )}
                    <p className="review-answers px-2">{answer.text}</p>
                  </li>
                );
              })}
            </ul>
          </Card.Body>
        </Card>
      ))}
      <Button className="mb-4" variant="primary" href={quizName}>
        Try again
      </Button>
    </Container>
  );
};

export default ReviewAnswers;
