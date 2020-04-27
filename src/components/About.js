import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="my-3">
      <h1>About CYF Quiz Project</h1>
      <p>Hello, and welcome to CYF Quiz. We're so glad you're here.</p>
      <p>
        We are a group of graduates from CodeYourFuture who decided to create
        CYF Quiz based on our experience as previous students to the course and
        as a graduates who are looking to give back to the CYF community. CYF
        Quiz will help students to test their knowledge on the various CYF
        syllabus modules. With CYF Quiz, we aim to encourage our students to
        take new challenges, and build their confidence to try new things every
        time. It is also a testament for us, the developers, to present a
        valuable product that benefits the current students.
      </p>
      <h2>Meet the team</h2>
      <p>The developers of this project are:</p>
      <ul>
        <li>AbdulKadir Awel</li>
        <li>Viktoriia Kosenko</li>
        <li>Ahmed Merehil</li>
        <li>Ali Sonmez</li>
      </ul>
    </Container>
  );
};

export default About;
