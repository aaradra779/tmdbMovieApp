import React, { useEffect, useState } from 'react';
import '../assets/global.scss';
// import '../assets/global.css';
import { client } from '../helpers';

function Navbar({ isLoggedIn }) {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const { isloggedIn } = useSessionStore();

  // useEffect(() => {
  //   if (localStorage.getItem('session_id')) {
  //     setIsLoggedIn(true);
  //   } else setIsLoggedIn(false);
  // });

  const handleLogin = async () => {
    const response = await client.get('authentication/token/new');
    const requestToken = response.data.request_token;

    const url =
      'https://www.themoviedb.org/authenticate/' +
      requestToken +
      '?redirect_to=http://localhost:5000';

    window.open(url, '_self');
  };

  const handleLogout = async () => {
    const getSessionId = localStorage.getItem('session_id');

    if (!getSessionId) {
      console.log('no token found');
      return;
    }

    try {
      const response = await client
        .delete('authentication/session', {
          data: {
            session_id: getSessionId,
          },
        })

        .then((res) => {});
    } catch (err) {
      console.log(err.message.data);
    } finally {
      localStorage.removeItem('session_id');
    }
    // setIsLoggedIn(false);

    window.location.reload();
  };

  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <div className="header__left">
            <p className="header__text">MovieQuestDB</p>
          </div>

          <div className="header__middle">
            <ul className="header__list">
              <li className="header__item">Home</li>
              <li className="header__item">Tv Shows</li>
              <li className="header__item">Movies</li>
              <li className="header__item">More</li>
            </ul>
          </div>

          <div className="header__right">
            {isLoggedIn ? (
              <>
                <p className="header__userprofile">Profile</p>
                <button className="header__button" onClick={handleLogout}>
                  Log out
                </button>
              </>
            ) : (
              <button className="header__button" onClick={handleLogin}>
                Log in
              </button>
            )}
          </div>
          {/* {isLoggedIn ? (
            <button className="header__button" onClick={handleLogout}>
              Log out
            </button>
          ) : (
            <button className="header__button" onClick={handleLogin}>
              Log in
            </button>
          )} */}
        </nav>
      </header>
    </>
  );
}

export default Navbar;
