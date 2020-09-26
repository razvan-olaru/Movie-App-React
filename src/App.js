import React, { useEffect, useState } from "react";
import "./App.css";
import Movie from "./components/Movie";
import SearchIcon from "@material-ui/icons/Search";

const TOP_MOVIES_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e740be3713bb5462336f106655881117&page=1";

const SEARCH_QUERY =
  "https://api.themoviedb.org/3/search/movie?&api_key=e740be3713bb5462336f106655881117&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  useEffect(() => {
    getMovies(TOP_MOVIES_API);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchWord) {
      getMovies(SEARCH_QUERY + searchWord);
      setSearchWord("");
    }
  };

  const handleOnChange = (e) => {
    setSearchWord(e.target.value);
  };

  return (
    <div>
      <header>
        <h2 className="title">Movie App</h2>
        <form onSubmit={handleOnSubmit}>
          <input
            className="search"
            value={searchWord}
            onChange={handleOnChange}
            type="text"
            placeholder="Search"
          ></input>
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
      <footer>
        <img
          className="img-footer"
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
        ></img>
      </footer>
    </div>
  );
}

export default App;
