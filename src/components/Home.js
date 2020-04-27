import React from 'react';
import { Button } from 'react-bootstrap';

const Home = () => {
  return (
    <main className="text-center">
      <h1>{"CYF Quiz"}</h1>
      <p>Hello Coder !</p>
      <p>Are you ready for the next challenge?</p>
      <p>Take a quiz!</p>
      <ul className="list-unstyled">
        <li className="mb-1"><Button href="quiz">HTML</Button></li>
        <li className="mb-1"><Button href="quiz">CSS</Button></li>
        <li className="mb-1"><Button href="quiz">JavaScript</Button></li>
      </ul>
    </main>
  );
};

export default Home;
