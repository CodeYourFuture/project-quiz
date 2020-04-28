import React from 'react';
import { Button } from 'react-bootstrap';

const Home = () => {
  return (
    <main className="text-center">
      <h1>CYF Quiz</h1>
      <p className="mb-0 py-0 h3 mt-4">Hello Coder !</p>
      <p className="mb-0 py-0 h3">Are you ready for the next challenge?</p>
      <p className="mb-0 py-0 h3">Take a quiz!</p>
      <ul className="list-unstyled my-4">
        <li><Button className="mb-2 btn-block w-25 mx-auto font-weight-bold" href="quiz">HTML</Button></li>
        <li><Button className="mb-2 btn-block w-25 mx-auto font-weight-bold" href="quiz">CSS</Button></li>
        <li><Button className="mb-2 btn-block w-25 mx-auto font-weight-bold" href="quiz">JavaScript</Button></li>
      </ul>
    </main>
  );
};

export default Home;
