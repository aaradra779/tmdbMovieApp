import React from 'react';
import './topbar.css';
import { People } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function Topbar() {
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
          <span className="home">Tv-Shows</span>
          <span className="home">More</span>
        </div>
        <div className="topbarRight">
          <span className="profile">Profile</span>
          <People className="icon" />
          <Button className="LoginButton"> Log in </Button>
        </div>
      </div>
    </>
  );
}

export default Topbar;
