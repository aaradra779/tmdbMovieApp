import React, { useEffect, useState } from 'react';
import './topbar.css';
import { FavoriteBorder, People } from '@mui/icons-material';
import { Link, redirect } from 'react-router-dom';
import { Button } from '@mui/material';
import Dropdown from '../dropdown/Dropdown';
import { client } from '../../helpers';
import { fetchUser } from '../../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';

function Topbar({ user }) {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  // const [Isbuttons, setButtons]
  // const dispatch = useDispatch();
  // const users = useSelector((state) => state.users);

  useEffect(() => {
    if (localStorage.getItem('session_id')) {
      setIsLoggedIn(true);
    } else setIsLoggedIn(false);

    // dispatch(fetchUser());
  });

  const tvshows = [
    {
      label: 'Popular',
      path: '/',
    },

    {
      label: 'Popular',
      path: '/',
    },
    {
      label: 'Popular',
      path: '/',
    },
  ];
  const movies = [
    {
      label: 'Popular',
      path: '/',
    },

    {
      label: 'Popular',
      path: '/',
    },
    {
      label: 'Popular',
      path: '/',
    },
  ];

  const handleLogin = async () => {
    // setIsLoggedIn(true);
    const response = await client.get('authentication/token/new');
    const requestToken = response.data.request_token;
    // console.log(requestToken);
    const url =
      'https://www.themoviedb.org/authenticate/' +
      requestToken +
      '?redirect_to=http://localhost:5173';

    window.open(url, '_self');
    // setIsLoggedIn(true);
  };

  const handleLogout = async () => {
    const getSessionId = localStorage.getItem('session_id');
    // console.log(getSessionId);
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
        .then((res) => {
          // console.log(res);
        });

      // console.log(response.data);
    } catch (err) {
      // console.log(err);
    } finally {
      localStorage.removeItem('session_id');
    }
    setIsLoggedIn(false);
    window.location.reload();
  };

  return (
    <>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <p className="logoText"> MovieQuestDB</p>

          {/* <img src="src/assets/react.svg" alt="" /> */}
        </div>
        <div className="topbarMiddle">
          <Link to="/">
            <span className="home">Home</span>
          </Link>
          <span className="home">
            <Dropdown title="Tv-Shows" menuItems={tvshows} />
          </span>
          <span className="home">Movies</span>
        </div>
        <div className="topbarRight">
          {isLoggedIn ? (
            <Link to="/profile">
              <span className="profile">Profile</span>
            </Link>
          ) : (
            ''
          )}

          {isLoggedIn ? (
            <Button className="LoginButton" onClick={handleLogout}>
              Log out
            </Button>
          ) : (
            <Button className="LoginButton" onClick={handleLogin}>
              Log in
            </Button>
          )}

          {/* {
            localStorage.getItem('session_id') && (
              <Button className="LoginButton" onClick={handleLogout}>
                Log out
              </Button>
            )
            // && <FavoriteBorder className="icon" />
            // <People className="icon" />
          } */}
          {/* 
          {!localStorage.getItem('session_id') && (
            <Button className="LoginButton" onClick={handleLogin}>
              Log in
            </Button>
          )} */}
        </div>
      </div>
    </>
  );
}

export default Topbar;
