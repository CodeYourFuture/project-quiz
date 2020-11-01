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
        <span
          style={{
            fontSize: '2.5rem',
            color: '#383838',
            position: 'relative',
            background: 'none',
            bottom: '-0.5rem',
            left: '0.3rem',
          }}
        >
          &#x2610;
          <span
            style={{
              fontSize: '1.5rem',
              color: '#383838',
              position: 'absolute',
              bottom: '0.1rem',
              left: '0.4rem',
            }}
          >
            &#x2713;
          </span>
        </span>
      );
    } else {
      return (
        <span
          style={{
            fontSize: '2.5rem',
            color: '#383838',
            position: 'relative',
            background: 'none',
            bottom: '-0.5rem',
            left: '0.3rem',
          }}
        >
          &#x2610;
        </span>
      );
    }
  } else if (userAnswers[question._id].includes(answer._id)) {
    return (
      <span
        style={{
          fontSize: '2.5rem',
          color: '#383838',
          position: 'relative',
          background: 'none',
          bottom: '-0.5rem',
          left: '0.3rem',
        }}
      >
        &#9746;
      </span>
    );
  } else {
    return (
      <span
        style={{
          fontSize: '2.5rem',
          color: '#383838',
          position: 'relative',
          background: 'none',
          bottom: '-0.5rem',
          left: '0.3rem',
        }}
      >
        &#x2610;
      </span>
    );
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
      <Form>
        <fieldset disabled>
          {questions.map(question => (
            <Card key={question._id} className="mb-4">
              <Card.Header as="h5">{question.text}</Card.Header>
              <Card.Body className="bg-white">
                <Form.Group className="bg-light" key={question._id}>
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
                          className={getAnswersClass(
                            question,
                            userAnswers,
                            answer,
                          )}
                        >
                          {getAnswersMark(
                            question,
                            userAnswers,
                            answer,
                            selectedAnswers,
                          )}
                          <label className="review-answers px-2">
                            {answer.text}
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </Form.Group>
              </Card.Body>
            </Card>
          ))}
        </fieldset>
        <Button className="mb-4" variant="primary" href={quizName}>
          Try again
        </Button>
      </Form>
    </Container>
  );
};

export default ReviewAnswers;
