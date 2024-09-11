import React, { useEffect, useState } from 'react';

function Footer({ accountData, isloggedIn }) {
  // const [isLoggedIn, setIsLoggedIn] = useState(null);

  // console.log(accountData);
  // useEffect(() => {
  //   if (localStorage.getItem('session_id')) {
  //     setIsLoggedIn(true);
  //   } else setIsLoggedIn(false);
  // }, []);
  // console.log(isloggedIn);
  return (
    <>
      <footer className="footer">
        <div className="footer__content">
          <div className="footer__leftsection">
            <p className="footer__title">MovieQuestDB</p>
            {isloggedIn ? (
              <button className="footer__button">
                Hi {accountData.username}
              </button>
            ) : (
              <button className="footer__button">Hi User!</button>
            )}
          </div>

          <div className="footer__links">
            <div className="footer__list">
              <h2 className="footer__itemsheading">RESOURCES</h2>
              <ul>
                <li>
                  <p className="footer__items">Home</p>
                </li>

                <li>
                  <p className="footer__items">About us</p>
                </li>
              </ul>
            </div>
            <div className="footer__list">
              <h2 className="footer__itemsheading">FOLLOW US</h2>
              <ul>
                <li>
                  <p className="footer__items">Git Hub</p>
                </li>

                <li>
                  <p className="footer__items">Discord</p>
                </li>
              </ul>
            </div>
            <div className="footer__list">
              <h2 className="footer__itemsheading">LEGAL</h2>
              <ul>
                <li>
                  <p className="footer__items">Privacy</p>
                </li>

                <li>
                  <p className="footer__items">Terms and Conditions</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__copyright">
          <hr className="footer__hr" />
          <span className="footer__copyrightlink">
            @2024
            <a
              href="https://www.wikipedia.org/"
              style={{
                color: 'white',
                marginRight: '10px',
                marginLeft: '10px',
              }}
            >
              {' '}
              Wikipedia{' '}
            </a>
            .All Rights Reserved
          </span>

          <hr className="footer__hr" />
        </div>
      </footer>
    </>
  );
}

export default Footer;
