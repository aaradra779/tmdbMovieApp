import React from 'react';
import './trendingWeek.css';
import { imageUrl } from '../../helpers';
import { FavoriteBorder } from '@mui/icons-material';

function TrendingWeek({ trendingWeek }) {
  return (
    <>
      <div>
        <ul className="trendingMovieFrame">
          {trendingWeek.results.map((item) => (
            <li key={item.id} className="trendingMovieList">
              <img
                src={`${imageUrl}${item.backdrop_path}`}
                alt=""
                className="trendingMovie"
              />
              <div className="trendingMovieName">{item.title}</div>
              <div className="addFav">
                <div className="trendingMovieDate">{item.release_date}</div>
                <div className="favourited">
                  <FavoriteBorder className="iconList" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TrendingWeek;
