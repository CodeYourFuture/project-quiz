import React from 'react';
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
          <Link
            to="/html"
            className="btn btn-primary mb-2 px-4 font-weight-bold"
          >
            HTML
          </Link>
        </li>
        <li>
          <Link
            to="/css"
            className="btn btn-primary mb-2 px-4 font-weight-bold"
          >
            CSS
          </Link>
        </li>
        <li>
          <Link to="/js" className="btn btn-primary mb-2 px-4 font-weight-bold">
            JavaScript
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default Home;
