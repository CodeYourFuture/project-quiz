import React, { useState } from 'react';
import ReviewAnswers from './ReviewAnswers';
import { Button, Jumbotron } from 'react-bootstrap';

const Result = ({ score, numOfQuestions, userAnswers, shuffledData }) => {
  const [showReview, setShowReview] = useState(false);

  return showReview ? (
    <ReviewAnswers
      userAnswers={userAnswers}
      shuffledData={shuffledData}
      numOfQuestions={numOfQuestions}
      score={score}
    />
  ) : (
    <div>
      <Jumbotron>
        <h2>
          You have got {score} out of {numOfQuestions}.
        </h2>
      </Jumbotron>
      <Button className="mr-2 mb-4" variant="secondary" href="quiz">
        Try again
      </Button>
      <Button
        className="mb-4"
        variant="primary"
        onClick={() => setShowReview(true)}
      >
        Review answers
      </Button>
    </div>
  );
};

export default Result;
