import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="text-center">
      <h1>CYF Quiz</h1>
      <p className="mb-0 h3">Hello Coder !</p>
      <p className="mb-0 h3">Are you ready for the next challenge?</p>
      <p className="mb-0 h3">Take a quiz!</p>
      <ul className="list-unstyled my-4">
        <li>
          <Link to="/html">
            <Button className="mb-2 px-4 font-weight-bold">HTML</Button>
          </Link>
        </li>
        <li>
          <Link to="/css">
            <Button className="mb-2 px-4 font-weight-bold" href="/css">
              CSS
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/js">
            <Button className="mb-2 px-4 font-weight-bold" href="/js">
              JavaScript
            </Button>
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default Home;
