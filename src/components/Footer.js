import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = () => {
    const today = new Date();
    const year = today.getFullYear();
    return year;
  };

  return (
    <footer className="bg-primary text-white pt-3">
      <div className="d-flex justify-content-around">
        <section>
          <h6 className="text-uppercase">Social</h6>
          <ul className="list-unstyled mb-1">
            <li>
              <p className="mb-0">
                <a
                  className="github social text-white"
                  href="https://github.com/CodeYourFuture/project-quiz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    aria-hidden="true"
                    aria-label="Github icon"
                    icon={faGithub}
                  />
                  <span class="ml-2"> Github </span>
                </a>
              </p>
            </li>
          </ul>
        </section>

        <section>
          <h6 className="text-uppercase">Developers</h6>
          <ul className="list-unstyled mb-1">
            <li>
              <p className="mb-0">
                <a
                  className="linkedin social text-white"
                  href="https://www.linkedin.com/in/viktoriia-kosenko-030983168/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    aria-hidden="true"
                    aria-label="Linkedin icon"
                    icon={faLinkedin}
                    size="1x"
                  />
                  <span class="ml-2"> Vicky </span>
                </a>
              </p>
            </li>
            <li>
              <p className="mb-0">
                <a
                  className="linkedin social text-white"
                  href="https://www.linkedin.com/mwlite/in/ahmed8merehil"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    aria-hidden="true"
                    aria-label="Linkedin icon"
                    icon={faLinkedin}
                    size="1x"
                  />
                  <span class="ml-2"> Ahmed </span>
                </a>
              </p>
            </li>
            <li>
              <p className="mb-0">
                <a
                  className="linkedin social text-white"
                  href="https://www.linkedin.com/in/abdulkadir-awel-23781a1a4/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    aria-hidden="true"
                    aria-label="Linkedin icon"
                    icon={faLinkedin}
                    size="1x"
                  />
                  <span class="ml-2"> Abdulkadir </span>
                </a>
              </p>
            </li>
            <li>
              <p className="mb-0">
                <a
                  className="linkedin social text-white"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    aria-hidden="true"
                    aria-label="Linkedin icon"
                    icon={faLinkedin}
                    size="1x"
                  />
                  <span class="ml-2"> Ali </span>
                </a>
              </p>
            </li>
          </ul>
        </section>
      </div>

      <section className="bg-info text-center py-2">
        <small>
          <p className="mb-0">
            Copyright &copy; {`${currentYear()}`}, CYF Scot Quiz Project
          </p>
        </small>
      </section>
    </footer>
  );
};

export default Footer;
