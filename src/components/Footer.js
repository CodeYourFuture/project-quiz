import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Container, Col, Row } from 'react-bootstrap';

const Footer = () => {
  const currentYear = () => {
    const today = new Date();
    const year = today.getFullYear();
    return year;
  };

  return (
    <footer className="bg-primary pt-3">
      <Container fluid>
        <Row>
          <Col xs={6} className="pr-4 pl-4 border-right border-secondary">
            <h6 className="text-center text-uppercase text-white mb-0">
              Social
            </h6>
            <hr className="mb-1 mt-1" style={{ width: '80px' }} />
            <Row className="d-flex justify-content-center">
              <ul className="list-unstyled mb-1">
                <li className="text-center">
                  <p className="mt-0 mb-1">
                    <a
                      className="github social"
                      href="https://github.com/CodeYourFuture/project-quiz/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        aria-hidden="false"
                        aria-label="Github icon"
                        icon={faGithub}
                      />
                      <span class="ml-2"> Github </span>
                    </a>
                  </p>
                </li>
              </ul>
            </Row>
          </Col>

          <Col xs={6} className="pr-5 pl-2 border-right">
            <h6 className="text-center text-uppercase text-white mb-0">
              Developers
            </h6>
            <hr className="mb-1 mt-1" style={{ width: '110px' }} />
            <Row className="mt-md-0 mt-1">
              <Col md={12}>
                <Row className="d-flex justify-content-center">
                  <ul className="list-unstyled mb-1">
                    <li>
                      <p className="mt-0 mb-1">
                        <a
                          className="linkedin social"
                          href="https://www.linkedin.com/in/viktoriia-kosenko-030983168/"
                          target="_blank"
                        >
                          <FontAwesomeIcon
                            aria-hidden="false"
                            aria-label="Linkedin icon"
                            icon={faLinkedin}
                            size="1x"
                          />
                          <span class="ml-2"> Vicky </span>
                        </a>
                      </p>
                    </li>
                    <li>
                      <p className="mt-0 mb-1">
                        <a
                          className="linkedin social"
                          href="https://www.linkedin.com/mwlite/in/ahmed8merehil"
                          target="_blank"
                        >
                          <FontAwesomeIcon
                            aria-hidden="false"
                            aria-label="Linkedin icon"
                            icon={faLinkedin}
                            size="1x"
                          />
                          <span class="ml-2"> Ahmed </span>
                        </a>
                      </p>
                    </li>
                    <li>
                      <p className="mt-0 mb-1">
                        <a
                          className="linkedin social"
                          href="https://www.linkedin.com/in/abdulkadir-awel-23781a1a4/"
                          target="_blank"
                        >
                          <FontAwesomeIcon
                            aria-hidden="false"
                            aria-label="Linkedin icon"
                            icon={faLinkedin}
                            size="1x"
                          />
                          <span class="ml-2"> Abdulkadir </span>
                        </a>
                      </p>
                    </li>
                    <li>
                      <p className="mt-0 mb-1">
                        <a className="linkedin social" href="#" target="_blank">
                          <FontAwesomeIcon
                            aria-hidden="false"
                            aria-label="Linkedin icon"
                            icon={faLinkedin}
                            size="1x"
                          />
                          <span class="ml-2"> Ali </span>
                        </a>
                      </p>
                    </li>
                  </ul>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="bg-info text-white text-center py-2">
        <small>
          Copyright &copy; {`${currentYear()}`}, CYF Scot Quiz Project
        </small>
      </div>
    </footer>
  );
};

export default Footer;
