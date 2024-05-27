import React from 'react';
import './movieList.css';
import { imageUrl } from '../../helpers';

function MovieList({ moviesList }) {
  // const [moviesList] = useOutletContext();

  return (
    <>
      <div className="movielistContainer">
        <ul className="movielistRight">
          {moviesList.results.map((item) => (
            <li key={item.id} className="movieList">
              <img
                // src="src/assets/react.svg"
                src={`${imageUrl}${item.backdrop_path}`}
                alt=""
                className="moviecoverImg"
              />

              <div className="movieTitle">
                <div className="result">
                  <h3 className="resultMovie">{item.title}</h3>
                  <span className="releaseDate">{item.release_date}</span>
                </div>
                <div className="overview">
                  <h4 className="movieOverview">{item.overview}</h4>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MovieList;
