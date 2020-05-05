import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Navbar.Brand as={Link} to="/">
        CYF Quiz
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link as={NavLink} to="/" className="ml-5">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about" className="ml-5">
            About
          </Nav.Link>
          <NavDropdown
            title="Quizzes"
            id="collasible-nav-dropdown"
            className="ml-5"
          >
            <NavDropdown.Item as={Link} to="/quiz">
              Html
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="#action/3.2">
              Css
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="#action/3.3">
              Javascript
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
