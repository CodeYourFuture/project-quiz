import React from 'react';
import { Form, Jumbotron } from 'react-bootstrap';

const Question = ({ question, handleAnswerSelect, selectedAnswer = [] }) => {
  return (
    <fieldset>
      <Jumbotron>
        <h2>{question.text}</h2>
        <Form.Group key={question._id}>
          {question.answers.map(answer => {
            return (
              <Form.Check
                key={answer._id}
                type={question.qType}
                id={`${question._id}.${answer._id}`}
                name={question._id}
                value={answer._id}
                onChange={e => handleAnswerSelect(e, question.qType)}
                label={`${answer.text}`}
                defaultChecked={selectedAnswer.includes(answer._id)}
              />
            );
          })}
        </Form.Group>
      </Jumbotron>
    </fieldset>
  );
};

export default Question;
