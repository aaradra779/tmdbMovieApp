import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SearchInput() {
  const [searchMovie, setSearchMovie] = useState('');

  return (
    <>
      <div className="search">
        <div className="search__field">
          <input
            type="text"
            placeholder="search for movies, tvshows and more..."
            className="search__input"
            onChange={(e) => setSearchMovie(e.target.value)}
          />
          <Link to={'/SearchResults?q=' + searchMovie}>
            <button className="search__button">Search</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SearchInput;
