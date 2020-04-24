import React from "react";
import { Button } from "react-bootstrap";


const Home = props => {
  return (
    <main className="d-flex flex-column justify-content-center ">
      <section className="align-self-center text-center">
        <h1> {"{...}"} </h1>
        <h2> Hello Coder ! </h2>
        <h3> Are you ready for the next challenge ?
        <p> Take a Quiz </p>
        </h3>
      </section>
      <section className="align-self-center text-center">
        <ul className="list-unstyled">
          <li> HTML <Button href="Quiz" > HTML</Button> </li>
          <li> CSS  <Button href="./Quiz" > CSS</Button> </li>
          <li> JavaScript <Button href="./Quiz"> JavaScript</Button> </li>
        </ul>
      </section>
    </main>
  );
};

export default Home;
