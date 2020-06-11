import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = () => {
    const today = new Date();
    return today.getFullYear();
  };

  return (
    <footer className="bg-primary text-white pt-3">
      <div className="d-flex justify-content-around">
        <section>
          <h6 className="text-uppercase">Social</h6>
          <ul className="list-unstyled">
            <li>
              <a
                className="footer-link text-white"
                href="https://github.com/CodeYourFuture/project-quiz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="mr-2"
                  aria-hidden="true"
                  icon={faGithub}
                />
                Github
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h6 className="text-uppercase">Developers</h6>
          <ul className="list-unstyled">
            <li>
              <a
                className="footer-link text-white"
                href="https://www.linkedin.com/in/viktoriia-kosenko-030983168/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="mr-2"
                  aria-hidden="true"
                  icon={faLinkedin}
                />
                Vicky
              </a>
            </li>
            <li>
              <a
                className="footer-link text-white"
                href="https://www.linkedin.com/in/ahmed8merehil/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="mr-2"
                  aria-hidden="true"
                  icon={faLinkedin}
                />
                Ahmed
              </a>
            </li>
            <li>
              <a
                className="footer-link text-white"
                href="https://www.linkedin.com/in/abdulkadir-awel-23781a1a4/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="mr-2"
                  aria-hidden="true"
                  icon={faLinkedin}
                />
                Abdulkadir
              </a>
            </li>
            <li>
              <a
                className="footer-link text-white"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="mr-2"
                  aria-hidden="true"
                  icon={faLinkedin}
                />
                Ali
              </a>
            </li>
          </ul>
        </section>
      </div>
      <section className="bg-info text-center py-2">
        <p className="mb-0">
          <small>
            Copyright &copy; {`${currentYear()}`}, CYF Scot Quiz Project
          </small>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
