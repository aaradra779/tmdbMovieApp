import React from 'react';
import ReactLogo from '../../assets/react.svg';
import { Link, NavLink } from 'react-router-dom';
import './footer.css';
import { Button } from '@mui/material';

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footerDiv">
          <div className="footerSection">
            <Link to="/">
              <div className="footerLogo">
                <p className="logoName">Your Logo</p>
                <Button className="footerButton">Hi Alex!</Button>
              </div>
            </Link>

            <div className="content">
              <div>
                <h2 className="resourceHeading">RESOURCES</h2>
                <ul>
                  <li>
                    <p className="footerText">Home</p>
                  </li>

                  <li>
                    <p className="footerText">About us</p>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="resourceHeading">FOLLOW US</h2>
                <ul>
                  <li>
                    <p className="footerText">Git Hub</p>
                  </li>

                  <li>
                    <p className="footerText">Discord</p>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="resourceHeading">LEGAL</h2>
                <ul>
                  <li>
                    <p className="footerText">Privacy</p>
                  </li>

                  <li>
                    <p className="footerText">Terms and Conditions</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="copyright">
            <hr className="horizontalRow" />
            <span>
              @2024
              <a href="https://www.wikipedia.org/" style={{ color: 'white' }}>
                {' '}
                Wikipedia{' '}
              </a>
              .All Rights Reserved
            </span>

            {/* <div className="mediaLogo"></div> */}
            <hr className="horizontalRow" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
