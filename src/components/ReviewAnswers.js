import React from 'react';
import { Button, Card } from 'react-bootstrap';

const getAnswersClass = (question, userAnswers, answer) => {
  if (answer.isCorrect) {
    return 'text-success';
  } else if (userAnswers[question.id] === answer.id) {
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
      <div>
        <h3>
          Your score is : {score} / {numOfQuestions}
        </h3>
      </div>
      {questions.map(question => (
        <Card>
          <Card.Body>
            <Card.Title>{question.text}</Card.Title>
            <Card.Text>
              <ul>
                {question.answers.map(answer => (
                  <li
                    className={getAnswersClass(question, userAnswers, answer)}
                  >
                    {answer.text}
                  </li>
                ))}
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
      <Button className="my-2 mr-2" variant="primary" href={quizName}>
        Try again
      </Button>
    </div>
  );
};

export default ReviewAnswers;
