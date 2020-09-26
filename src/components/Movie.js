import React from "react";

const MOVIE_IMAGES = "https://image.tmdb.org/t/p/w1280";
const setGradeClass = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};

const Movie = ({ title, poster_path, overview, vote_average }) => (
  <div className="movie">
    <img src={MOVIE_IMAGES + poster_path} alt={title} />
    <div className="movie-details">
      <h3>{title}</h3>
      <span className={`tag ${setGradeClass(vote_average)}`}>
        {vote_average}
      </span>
    </div>

    <div className="movie-summary">
      <h2>Movie summary:</h2>
      <p>{overview}</p>
    </div>
  </div>
);

export default Movie;
