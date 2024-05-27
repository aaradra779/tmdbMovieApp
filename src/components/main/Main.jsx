import React, { useEffect, useState } from 'react';
import './main.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { client } from '../../helpers';
import { tmbdApiConfig } from '../../config';
import TrendingMovie from '../trending/TrendingMovie';
import TrendingWeek from '../trendingWeek/TrendingWeek';

function Main() {
  const [searchMovie, setSearchMovie] = useState('');
  const buttons = {
    today: 'today',
    thisWeek: 'thisWeek',
  };
  const [activeButton, setActiveButton] = useState(buttons.today);
  const [trending, setTrending] = useState({ results: [] });
  const [trendingWeek, setTrendingWeek] = useState({ results: [] });

  // console.log(searchMovie);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await client.get(
        'trending/movie/day',

        {
          headers: {
            Authorization: `Bearer ${tmbdApiConfig.API_READ_ACCESS_TOKEN}`,
          },
        }
      );
      setTrending(res.data);

      const trendingWeek = await client.get(
        'trending/movie/week',

        {
          headers: {
            Authorization: `Bearer ${tmbdApiConfig.API_READ_ACCESS_TOKEN}`,
          },
        }
      );
      setTrendingWeek(trendingWeek.data);
    };

    fetchApi();
  }, []);

  return (
    <>
      <div className="mainContainer">
        <div className="topContainer">
          <img src="src/assets/image.png" alt="" className="backgroundImg" />

          <div className="searchbar">
            <Link to={'/feed?q=' + searchMovie} className="searchbarIcon">
              <Button className="button">search</Button>
              {/* <Search /> */}
            </Link>

            <input
              type="text"
              placeholder="Search for movies, tvShows and many more..."
              className="searchbarInput"
              onChange={(e) => setSearchMovie(e.target.value)}
            />
          </div>
        </div>

        <div className="bottomContainer">
          <div className="trending">Trending</div>
          <div className="switchButton">
            <Button
              className={`todayButton  ${
                activeButton === buttons.today ? 'active' : ''
              }`}
              onClick={() => setActiveButton(buttons.today)}
            >
              Today
            </Button>
            <Button
              className={`thisWeekButton  ${
                activeButton === buttons.thisWeek ? 'active' : ''
              }`}
              onClick={() => setActiveButton(buttons.thisWeek)}
            >
              This Week
            </Button>
          </div>
        </div>
        <div>
          {activeButton === buttons.today && (
            <TrendingMovie trending={trending} />
          )}
          {activeButton === buttons.thisWeek && (
            <TrendingWeek trendingWeek={trendingWeek} />
          )}
        </div>
      </div>
    </>
  );
}

export default Main;
