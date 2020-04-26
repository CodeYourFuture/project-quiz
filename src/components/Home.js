import React from 'react';
import { Button } from 'react-bootstrap';

const Home = () => {
  return (
    <main className="text-center">
      <section>
        <h2>{"{ CYF Quiz }"}</h2>
        <p>Hello Coder !<br />
        Are you ready for the next challenge ?<br />
        Take a quiz !</p>
        <ul className="list-unstyled">
          <li className="mb-3"><Button href="Quiz">HTML</Button></li>
          <li className="mb-3"><Button href="Quiz">CSS</Button></li>
          <li className="mb-3"><Button href="Quiz">JavaScript</Button></li>
        </ul>
      </section>
    </main>
  );
};

export default Home;
