import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3, faJs } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark">
      <Navbar.Brand as={Link} to="/">
        CYF Quiz
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link as={NavLink} to="/" className="ml-5">
            <FontAwesomeIcon
              className="mr-2"
              aria-hidden="true"
              aria-label="Home icon"
              icon={faHome}
            />
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
              <FontAwesomeIcon
                className="mr-2"
                aria-hidden="true"
                aria-label="HTML icon"
                icon={faHtml5}
                style={{ color: 'orange' }}
              />
              Html
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="#action/3.2">
              <FontAwesomeIcon
                className="mr-2"
                aria-hidden="true"
                aria-label="CSS icon"
                icon={faCss3}
                style={{ color: 'orange' }}
              />
              Css
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="#action/3.3">
              <FontAwesomeIcon
                className="mr-2"
                aria-hidden="true"
                aria-label="Javascript icon"
                icon={faJs}
                style={{ color: 'orange' }}
              />
              Javascript
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
