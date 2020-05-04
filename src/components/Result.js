import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';

const Result = ({ score, numOfQuestions }) => {
  return (
    <div>
      <Jumbotron>
        <h2>
          You have got {score} out of {numOfQuestions}
        </h2>
      </Jumbotron>
      <Button variant="secondary" href="quiz">
        Try again
      </Button>
      <Button variant="primary">
        Review answers
      </Button>
    </div>
  );
};

export default Result;
