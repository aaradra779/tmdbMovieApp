import React from 'react';
import { Link } from 'react-router-dom';
import { imageUrl } from '../helpers';

function SearchresultsList({ searchedData  }) {
  return (
    <>
        <div className="total">

          <div className="total__count">

          Total Results: {searchedData.total_results}
          </div>

           </div>

      <div className="results">
        <ul className="results__list">
          {searchedData.results.map((item) => (
            <Link key={item.id} to={`/preview/${item.id}`}>
              <li key={item.id} className="results__items">
                <img
                  // src="src/assets/react.svg"
                  src={`${imageUrl}${item.backdrop_path}`}
                  alt=""
                  className="results__image"
                />

                <div className="results__facts">
                  <h3 className="results__title">{item.title}</h3>
                  <p className="results__releasedate">{item.release_date}</p>

                  <p className="results__overview">{item.overview}</p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SearchresultsList;
