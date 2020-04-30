import React from "react";
import { Button, Jumbotron } from 'react-bootstrap';

const Result = ({ score }) => {
  return (
    <div>
      <Jumbotron>
        <h2>
          You have got {score} out of {data.length}
        </h2>
      </Jumbotron>
      <Button
        className="mr-2 mb-4"
        variant="secondary"
        href="quiz"
      >
        Try again
        </Button>
      <Button
        className="mr-2 mb-4"
        variant="primary"
      >
        Review Answers
        </Button>
    </div>
  )
}

export default Result;
