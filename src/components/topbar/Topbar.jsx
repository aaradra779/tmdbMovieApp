import React from 'react';
import './topbar.css';
import { FavoriteBorder, People } from '@mui/icons-material';
import { Link, redirect } from 'react-router-dom';
import { Button } from '@mui/material';
import Dropdown from '../dropdown/Dropdown';
import { client } from '../../helpers';

function Topbar() {
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

  return (
    <>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <img src="src/assets/react.svg" alt="" />
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
          <span className="profile">Profile</span>

          {localStorage.getItem('session_id') && <People className="icon" />}

          {!localStorage.getItem('session_id') && (
            <Button
              className="LoginButton"
              onClick={async () => {
                const response = await client.get('authentication/token/new');
                const requestToken = response.data.request_token;
                console.log(requestToken);
                const url =
                  'https://www.themoviedb.org/authenticate/' +
                  requestToken +
                  '?redirect_to=http://localhost:5173';

                window.open(url);
              }}
            >
              Log in
            </Button>
          )}
          <FavoriteBorder className="icon" />
        </div>
      </div>
    </>
  );
}

export default Topbar;
