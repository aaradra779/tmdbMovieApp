import React, { useEffect, useState } from 'react';
import './preview.css';
import { CircularProgress } from '@mui/material';
import {
  Bookmark,
  Favorite,
  List,
  PlayArrowRounded,
} from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import { client } from '../../helpers';

function Preview() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  const fetchMovieDetails = async (movieId) => {
    const response = await client.get(`movie/${movieId}`);
    console.log(response.data);
    setMovieDetails(response.data);
  };

  useEffect(() => {
    fetchMovieDetails(id);
  }, [id]);

  return (
    <>
      <div className="container">
        {movieDetails && (
          <div className="previewTopContainer">
            <div className="previewLeft">
              <img src="src/assets/image.png" alt="" className="previewImg" />
            </div>
            <div className="previewRight">
              <h1 className="title">{movieDetails.title}</h1>
              <div className="facts">
                <h4 className="release">
                  {movieDetails.release_date}({movieDetails.origin_country[0]})
                </h4>
                <h4 className="genres">
                  <ul className="genresList">
                    {movieDetails.genres.map((items) => (
                      <li className="genresList">
                        <h4>{items.name + ','}</h4>
                      </li>
                    ))}
                  </ul>
                </h4>
                <h4 className="runtime">1h 20m</h4>
              </div>
              <div className="score">
                <div className="percentageScore">
                  <CircularProgress variant="determinate" value={50} />
                </div>
                <span className="userscore">User Score</span>
              </div>

              <div className="actions">
                <div className="addtolist">
                  <List className="listIcon" />
                </div>
                <div className="favourites">
                  <Favorite className="listIcon" />
                </div>
                <div className="bookmark">
                  <Bookmark className="listIcon" />
                </div>
                <div className="playTrailer">
                  <PlayArrowRounded className="arrow" />
                  <span className="play">Play Trailer</span>
                </div>
              </div>
              <div className="movieInfo">
                <div className="tagline">{movieDetails.tagline}</div>
                <div className="detailOverview">
                  <h2>Overview</h2>
                  <p className="overviewText">{movieDetails.overview}</p>
                </div>
                <ul className="directorlist">
                  <li className="profile">
                    <a href="https://www.themoviedb.org/person/564-richard-linklater">
                      Richard Linklater
                    </a>
                    <p className="character">Director, Screenplay</p>
                  </li>
                  <li className="profile">
                    <a href="https://www.themoviedb.org/person/564-richard-linklater">
                      Richard Linklater
                    </a>
                    <p className="character">Director, Screenplay</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        <div className="previewBottomContainer">
          <span className="castText"> Cast Members</span>

          <div className="castText">cast list</div>
        </div>
      </div>
    </>
  );
}

export default Preview;
