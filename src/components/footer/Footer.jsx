import React, { useEffect, useState } from 'react';
import ReactLogo from '../../assets/react.svg';
import { Link, NavLink } from 'react-router-dom';
import './footer.css';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../redux/userSlice';

function Footer() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    if (localStorage.getItem('session_id')) {
      setIsLoggedIn(true);
    } else setIsLoggedIn(false);

    dispatch(fetchUser());
  }, [dispatch]);
  return (
    <>
      <footer className="footer">
        <div className="footerSection">
          <Link to="/">
            <div className="footerLogo">
              <p className="logoName">Your Logo</p>
              {isLoggedIn ? (
                <Button className="footerButton">
                  Hi {users.user.username}!
                </Button>
              ) : (
                <Button className="footerButton">Hi user!</Button>
              )}
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
      </footer>
    </>
  );
}

export default Footer;
