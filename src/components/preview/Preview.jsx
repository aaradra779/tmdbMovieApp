import React from 'react';
import './preview.css';
import { CircularProgress } from '@mui/material';
import {
  Bookmark,
  Favorite,
  List,
  PlayArrowRounded,
} from '@mui/icons-material';

function Preview() {
  return (
    <>
      <div className="container">
        <div className="previewTopContainer">
          <div className="previewLeft">
            <img src="src/assets/image.png" alt="" className="previewImg" />
          </div>
          <div className="previewRight">
            <h1 className="title">Movie Title</h1>
            <div className="facts">
              <h4 className="release">2024 may 10th(US)</h4>
              <h4 className="genres">Comedy, Romance</h4>
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
              <div className="favourite">
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
              <div className="tagline">He is nobody.</div>
              <div className="overview">
                <h2>Overview</h2>
                <p className="overviewText">
                  A mild-mannered professor moonlighting as a fake hit man in
                  police stings ignites a chain reaction of trouble when he
                  falls for a potential client.
                </p>
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
        <div className="previewBottomContainer">
          <span className="castText"> Cast Members</span>

          <div className="castText">cast list</div>
        </div>
      </div>
    </>
  );
}

export default Preview;
