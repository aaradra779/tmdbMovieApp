import React, { useEffect, useState } from 'react';
import './profile.css';
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  FavoriteBorder,
} from '@mui/icons-material';
import Topbar from '../topbar/Topbar';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../redux/userSlice';

function Profile() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  console.log(users);

  const activeButton = {
    overview: 'overview',
    watchlist: 'watchlist',
    rating: 'rating',
  };

  const [isActive, setActive] = useState(activeButton.overview);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <>
      {/* <Topbar user={user} /> */}
      <div className="profileContainer">
        <div className="profileWrapper">
          <div className="profileTop">
            <div className="profileCover">
              <div className="profileCoverImg"></div>
            </div>
            <div className="profileImg">
              <img src="src/assets/image.png" alt="" className="profilePic" />
            </div>
          </div>
          <div className="profileDetails">
            <h2 className="detailText">{users.user.username}</h2>
            <p className="memberDate">since may 24th</p>
          </div>
          <div className="profileBottom">
            <div className="nav">
              {/* <FavoriteBorder className="profileIcon" /> */}
              <div className="items">
                <p
                  className={`watchlist ${
                    isActive === activeButton.overview ? 'active' : ''
                  }`}
                  onClick={() => setActive(activeButton.overview)}
                >
                  Overview
                </p>
                <ArrowDropDown className="profileIcon" />
              </div>
              <div className="items">
                <p
                  className={`watchlist ${
                    isActive === activeButton.watchlist ? 'active' : ''
                  }`}
                  onClick={() => setActive(activeButton.watchlist)}
                >
                  Watchlist{' '}
                </p>
                <ArrowDropDown className="profileIcon" />
              </div>
              <div className="items">
                <p
                  className={`watchlist ${
                    isActive === activeButton.rating ? 'active' : ''
                  }`}
                  onClick={() => setActive(activeButton.rating)}
                >
                  Rating
                </p>
                <ArrowDropDown className="profileIcon" />
              </div>
            </div>
            <hr className="horizontalProfileRow" />

            <h2 className="headingText">Stats</h2>
            <div className="avgScore">
              <div className="avgMovieScore">
                <p className="avgText">Average Movie Score</p>
                <p className="avgNumber">1</p>
              </div>

              <div className="verticalLine"></div>

              <div className="avgTvScore">
                <p className="avgText">Average Movie Score</p>
                <p className="avgNumber">0</p>
              </div>
            </div>

            <h2 className="headingText">Upcoming from Watchlist</h2>
            <div className="recentActivity">
              <p className="recentActivityText">
                You have no upcomming from your list
              </p>
              <Button className="recentButton">Go to Watchlist</Button>
            </div>
            <h2 className="headingText">Recent Activity</h2>
            <div className="recentActivity">
              <p className="recentActivityText">You haven't made any changes</p>
              <Button className="recentButton">View More</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
