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
    <footer className="font-small blue bg-primary pt-2">
      <div className="container-fluid text-center text-md-left">
        <span className="row d-flex justify-content-center">
          <div className="col-md-5 mt-md-0 mt-0 d-flex justify-content-center">
            <p className="text-white mb-1 mt-1 pr-1">
              You can find the source code on Github
            </p>
            <a
              className="github social"
              href="https://github.com/CodeYourFuture/project-quiz/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
          <hr className="clearfix d-md-none" />

          <div className="col-md-6 mt-md-0 mt-1">
            <h6 className="text-center text-uppercase text-white">
              Developers
            </h6>
            <hr className="clearfix" style={{ width: '100px' }} />

            <div className="container-fluid text-center text-md-left">
              <span className="row">
                <div className="col-md-3 col-6 text-center">
                  <h6 className="text-white mt-1 mb-0">Vicky</h6>
                  <ul className="list-unstyled mb-0">
                    <li className="text-center">
                      <a
                        className="linkedin social"
                        href="https://www.linkedin.com/in/viktoriia-kosenko-030983168/"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-md-3 col-6 text-center">
                  <h6 className="text-white mt-1 mb-0">Ahmed</h6>
                  <ul className="list-unstyled mb-0">
                    <li className="text-center">
                      <a
                        className="linkedin social"
                        href="https://www.linkedin.com/mwlite/in/ahmed8merehil"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-md-3 col-6 text-center">
                  {/* <!-- Links --> */}
                  <h6 className="text-white mt-1 mb-0">Ali</h6>
                  <ul className="list-unstyled mb-0">
                    <li className="text-center">
                      <a className="linkedin social" href="#" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-md-3 col-6 text-center">
                  <h6 className="text-white mt-1 mb-0">Abdulkadir</h6>
                  <ul className="list-unstyled mb-0">
                    <li className="text-center">
                      <a
                        className="linkedin social"
                        href="https://www.linkedin.com/in/abdulkadir-awel-23781a1a4/"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                      </a>
                    </li>
                  </ul>
                </div>
              </span>
            </div>
          </div>
        </span>
      </div>

      <div className="bg-info text-white text-center py-2">
        <small>
          Copyright &copy; {`${currentYear()}`}, CYF Scot Quiz Project
        </small>
      </div>
    </footer>
  );
};

export default Footer;
