// SearchPage.js

import React, { useState } from 'react';
import './SearchPage.css';

const SearchPage = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleSearch = (genre) => {
    setSelectedGenre(genre);
    console.log("Search button clicked for genre:", genre);
  };

  const movies = [
    { title: "Movie 1", genre: "Horror", year: "2022", imageUrl: "https://via.placeholder.com/150" },
    { title: "Movie 2", genre: "Horror", year: "2022", imageUrl: "https://via.placeholder.com/150" },
    { title: "Movie 3", genre: "Action", year: "2019", imageUrl: "https://via.placeholder.com/150" },
    { title: "Movie 4", genre: "Romance", year: "2020", imageUrl: "https://via.placeholder.com/150" },
    { title: "Movie 5", genre: "Romance", year: "2020", imageUrl: "https://via.placeholder.com/150" },
    { title: "Movie 6", genre: "Comedy", year: "2021", imageUrl: "https://via.placeholder.com/150" },
    { title: "Movie 8", genre: "Horror", year: "2021", imageUrl: "https://via.placeholder.com/150" }
  ];

  const filteredMovies = selectedGenre ? movies.filter(movie => movie.genre === selectedGenre) : movies;

  return (
    <div className="search-container">
      <input type="text" placeholder="Search..." className="search-input" />
      <button onClick={() => handleSearch(null)} className="search-button">
        Show All
      </button>
      <div className="genres">
        <div className="genre" onClick={() => handleSearch("Horror")}>Horror</div>
        <div className="genre" onClick={() => handleSearch("Action")}>Action</div>
        <div className="genre" onClick={() => handleSearch("Romance")}>Romance</div>
        <div className="genre" onClick={() => handleSearch("Comedy")}>Comedy</div>
      </div>
      <div className="movie-cards">
        {filteredMovies.map((movie, index) => (
          <div key={index} className="movie-card">
            <img src={movie.imageUrl} alt={movie.title} className="movie-image" />
            <h3>{movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>Year: {movie.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
