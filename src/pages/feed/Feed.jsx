import React, { useState } from 'react';
import './feed.css';
import { Search } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import MovieList from '../../components/movieList/MovieList';
import TvshowList from '../../components/tvshowList/TvshowList';
import PersonList from '../../components/personList/PersonList';
import { LinearProgress } from '@mui/material';

import useMovieSearch from './useMovieSearch.js';

function Feed() {
  const { isLoading, moviesList, tvList, personList } = useMovieSearch();
  const feeds = {
    movies: 'movies',
    tvShows: 'tvshows',
    persons: 'persons',
  };
  const [activeFeed, setActiveFeed] = useState(feeds.movies);
  const [searchMovie, setSearchMovie] = useState('');

  const firstItem =
    moviesList.results.length > 0 ? moviesList.results[0].title : 'no results';

  return (
    <>
      {/* <Topbar /> */}

      <div className="searchbarTop">
        <Link to={'/feed?q=' + searchMovie}>
          <Search className="searchAgain" />
        </Link>

        <input
          type="text"
          placeholder={firstItem}
          className="searchagainBar"
          onChange={(e) => setSearchMovie(e.target.value)}
        />
      </div>

      <hr className="hrLine" />

      <div className="movielistContainers">
        {/* <SearchResults /> */}

        <ul className="movielistLeft">
          <div className="searchResults">
            <p className="searchtext">Search Results</p>
          </div>

          <li
            className={`movies  ${activeFeed === feeds.movies ? 'active' : ''}`}
            onClick={() => setActiveFeed(feeds.movies)}
          >
            <p className="movietext">Movies</p>
            <span className="movieCount">{moviesList.total_results}</span>
          </li>

          <li
            className={`movies  ${
              activeFeed === feeds.tvShows ? 'active' : ''
            }`}
            onClick={() => setActiveFeed(feeds.tvShows)}
          >
            <p className="movietext">TV Shows</p>

            <span className="movieCount">{tvList.total_results}</span>
          </li>

          <li
            className={`movies ${activeFeed === feeds.persons ? 'active' : ''}`}
            onClick={() => {
              setActiveFeed(feeds.persons);
            }}
          >
            <p className="movietext">Persons</p>

            <span className="movieCount">{personList.total_results}</span>
          </li>
        </ul>

        <ul className="movielistRight">
          {/* <Outlet context={moviesList}  /> */}

          {isLoading ||
          moviesList.length === 0 ||
          tvList.length === 0 ||
          personList.length === 0 ? (
            <LinearProgress />
          ) : (
            <div>
              {activeFeed === feeds.movies && (
                <MovieList moviesList={moviesList} />
              )}
              {activeFeed === feeds.tvShows && (
                <TvshowList tvshowList={tvList} />
              )}

              {activeFeed === feeds.persons && (
                <PersonList personList={personList} />
              )}
            </div>
          )}
        </ul>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Feed;
