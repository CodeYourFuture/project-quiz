import React from 'react';
import { Form, Card } from 'react-bootstrap';

const Question = ({ question, handleAnswerSelect, selectedAnswer = [] }) => {
  const addClassName = question => {
    if (question.qType === 'checkbox') {
      return 'styled-input-square';
    } else {
      return 'styled-input-rounded';
    }
  };

  return (
    <fieldset>
      <Card className="mb-3 rounded">
        <Card.Header className="bg-secondary text-white" as="h5">
          {question.text}
        </Card.Header>
        <Card.Body className="bg-white">
          <Form.Group className="bg-light px-1" key={question._id}>
            {question.answers.map(answer => {
              return (
                <div className="border-bottom">
                  <Form.Check
                    key={answer._id}
                    type={question.qType}
                    className={addClassName(question)}
                    id={`${question._id}.${answer._id}`}
                    name={question._id}
                    value={answer._id}
                    onChange={e => handleAnswerSelect(e, question.qType)}
                    label={`${answer.text}`}
                    defaultChecked={selectedAnswer.includes(answer._id)}
                  />
                </div>
              );
            })}
            <span className="checkmark"></span>
          </Form.Group>
        </Card.Body>
      </Card>
    </fieldset>
  );
};

export default Question;
