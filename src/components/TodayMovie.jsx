import { FavoriteBorder } from '@mui/icons-material';
import React from 'react';
import { imageUrl } from '../helpers';

function TodayMovie({ data }) {
  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <>
      <div className="today">
        <ul className="today__list">
          <div className="today__list">
            {data.results.map((item) => (
              <li key={item.id} className="today__item">
                <img
                  src={`${imageUrl}${item.backdrop_path}`}
                  alt=""
                  className="today__image"
                />
                <div className="today__title">{item.title}</div>
                <div className="today__fact">
                  <div className="today__releasedate">{item.release_date}</div>
                  <FavoriteBorder className="today__icon" />
                </div>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </>
  );
}

export default TodayMovie;
