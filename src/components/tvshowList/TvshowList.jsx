import './tvshow.css';
import { imageUrl } from '../../helpers';

function TvshowList({ tvshowList }) {
  return (
    <>
      <div className="movielistContainer">
        <ul className="movielistRight">
          {tvshowList.results.map((item) => (
            <li key={item.id} className="movieList">
              <img
                // src="src/assets/react.svg"
                src={`${imageUrl}${item.backdrop_path}`}
                alt=""
                className="moviecoverImg"
              />

              <div className="movieTitle">
                <div className="result">
                  <h3 className="resultMovie">{item.name}</h3>
                  <span className="releaseDate">{item.vote_count}</span>
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

export default TvshowList;
