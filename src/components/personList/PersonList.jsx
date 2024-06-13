import React from 'react';
import './personlist.css';
import { imageUrl } from '../../helpers';
import { Link } from 'react-router-dom';

function PersonList({ personList }) {
  return (
    <>
      <div className="movielistContainer">
        <ul className="movielistRight">
          {personList.results.map((item) => (
            <Link key={item.id} to={`/preview/${item.id}`}>
              <li key={item.id} className="movieList">
                <img
                  // src="src/assets/react.svg"
                  src={`${imageUrl}${item.profile_path}`}
                  alt=""
                  className="moviecoverImg"
                />

                <div className="movieTitle">
                  <div className="result">
                    <h3 className="resultMovie">{item.name}</h3>
                    <span className="releaseDate">{item.popularity}</span>
                  </div>
                  <div className="overview">
                    <h4 className="movieOverview">{item.original_name}</h4>
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}

export default PersonList;
