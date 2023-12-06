import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
//2a4f215d

const API_URL = `http://www.omdbapi.com?apikey=2a4f215d`;
const movie1 = {
  Title: "Batman v Superman: Dawn of Justice",
  Year: "2016",
  imdbID: "tt2975590",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
};

const App = () => {
    const [movies,setMovies] = useState([]);
    const [searchTerm, setSearchTerm]= useState('')
    const searchMovies = async (title) => {
    const responce = await fetch(`${API_URL}&s=${title}`);
    const data = await responce.json();

    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("batman");
  }, []);

  return (
    <div className="app">
      <h1>MovieInfo</h1>

      <div className="search">
        <input
          placeholder="Search Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt="Search Icon" onClick={() => searchMovies(searchTerm)} />
      </div>
      {
        movies?.length>0
        ?(
        <div className="container">
            {movies.map((movie)=>(<MovieCard movie = {movie}/>))}
        </div>
        ):(
            <div className="empty">
                <h2>No movies found</h2>
            </div>
        )
      }
      
    </div>
  );
}

export default App;
