import React from 'react';
import { Button, Card } from 'react-bootstrap';

const getAnswersClass = (question, userAnswers, answer) => {
  if (answer.isCorrect) {
    return 'text-success';
  } else if (userAnswers[question.id].includes(answer.id)) {
    return 'text-danger';
  } else {
    return '';
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
    <div>
      <p>
        Your score is: {score} / {numOfQuestions}
      </p>
      {questions.map(question => (
        <Card key={question.id} className="mb-4">
          <Card.Body>
            <Card.Title>{question.text}</Card.Title>
            <ul className="mb-0">
              {question.answers.map(answer => (
                <li
                  key={answer.id}
                  className={getAnswersClass(question, userAnswers, answer)}
                >
                  {answer.text}
                </li>
              ))}
            </ul>
          </Card.Body>
        </Card>
      ))}
      <Button className="mb-4" variant="primary" href={quizName}>
        Try again
      </Button>
    </div>
  );
};

export default ReviewAnswers;
