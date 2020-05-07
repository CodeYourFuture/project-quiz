import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark">
      <Navbar.Brand as={Link} to="/" className="mr-5">
        CYF Quiz
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse>
        <Nav>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
          <NavDropdown title="Quizzes">
            <NavDropdown.Item as={Link} to="/html">
              <FontAwesomeIcon
                className="mr-2 text-warning"
                aria-hidden="true"
                icon={faHtml5}
              />
              HTML
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/css">
              <FontAwesomeIcon
                className="mr-2 text-warning"
                aria-hidden="true"
                icon={faCss3}
              />
              CSS
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/js">
              <FontAwesomeIcon
                className="mr-2 text-warning"
                aria-hidden="true"
                icon={faJs}
              />
              JavaScript
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
