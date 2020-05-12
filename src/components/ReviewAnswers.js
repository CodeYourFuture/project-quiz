import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ReviewAnswersClass = (question, userAnswers, answer) => {
  if (answer.isCorrect) {
    return 'text-success';
  } else if (userAnswers[question.id] === answer.id) {
    return 'text-danger';
  } else {
    return '';
  }
};

const ReviewAnswers = ({ questions, quizName, userAnswers }) => {
  return (
    <div>
      {questions.map(question => {
        return (
          <Card className="mr-2 mb-2">
            <Card.Body>
              <Card.Text>
                <div
                  className="p-2 mb-2"
                  style={{ backgroundColor: 'lightGrey' }}
                >
                  <Card.Title>{question.text}</Card.Title>
                </div>
                <ul>
                  {question.answers.map(answer => {
                    return (
                      <li
                        className={ReviewAnswersClass(
                          question,
                          userAnswers,
                          answer,
                        )}
                      >
                        {answer.text}
                      </li>
                    );
                  })}
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
      <Button className="my-2 mr-2" variant="primary" href={quizName}>
        Try again
      </Button>
    </div>
  );
};

export default ReviewAnswers;
