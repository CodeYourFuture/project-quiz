import React from 'react';
import { Form, Jumbotron } from 'react-bootstrap';

const Question = ({ question, handleAnswerSelect, selectedAnswer = [] }) => {
  return (
    <fieldset>
      <Jumbotron>
        <h2>{question.text}</h2>
        <Form.Group key={question.id}>
          {question.answers.map(answer => {
            return (
              <Form.Check
                key={answer.id}
                type={question.type}
                id={`${question.id}.${answer.id}`}
                name={question.id}
                value={answer.id}
                onChange={e => handleAnswerSelect(e, question.type)}
                label={`${answer.text}`}
                defaultChecked={selectedAnswer.includes(answer.id)}
              />
            );
          })}
        </Form.Group>
      </Jumbotron>
    </fieldset>
  );
};

export default Question;
