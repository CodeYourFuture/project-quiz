import React, { useState } from 'react';
import ReviewAnswers from './ReviewAnswers';
import { Button, Jumbotron } from 'react-bootstrap';

const Result = ({
  score,
  quizName,
  userAnswers,
  numOfQuestions,
  questions,
}) => {
  const [showReview, setShowReview] = useState(false);

  return showReview ? (
    <ReviewAnswers
      score={score}
      quizName={quizName}
      questions={questions}
      userAnswers={userAnswers}
      numOfQuestions={numOfQuestions}
    />
  ) : (
    <div>
      <Jumbotron>
        <h2>
          You have got {score} out of {numOfQuestions}.
        </h2>
      </Jumbotron>
      <Button className="mr-2 mb-4" variant="secondary" href={quizName}>
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
