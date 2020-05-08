import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ReviewAnswers = ({
  userAnswers,
  shuffledData,
  score,
  numOfQuestions,
}) => {
  return (
    <div>
      <Card>
        <Card.Body>
          <div class="row">
            <div class="col-6">
              <Card.Title className="text-center"> Review answers </Card.Title>
            </div>
            <div className="col-6 text-center">
              Score : {score} / {numOfQuestions}
            </div>
          </div>
          <ol>
            {shuffledData.map(question => {
              return (
                <Card className="mr-2 mb-4">
                  <Card.Body>
                    <Card.Text>
                      <div
                        className="p-4 mb-3"
                        style={{ backgroundColor: 'lightGrey' }}
                      >
                        <li>{question.text}</li>
                      </div>
                      <ul>
                        {question.answers.map(answer => {
                          return (
                            <li
                              className={
                                answer.isCorrect
                                  ? 'text-success'
                                  : userAnswers[question.id] === answer.id
                                  ? 'text-danger'
                                  : ''
                              }
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
          </ol>
        </Card.Body>
      </Card>
      <Button className="mt-4 mr-2 mb-4" variant="secondary" href="quiz">
        Try again
      </Button>
    </div>
  );
};

export default ReviewAnswers;
