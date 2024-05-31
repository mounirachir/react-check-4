// App.js
import React, { useState } from "react";
import "./App.css";
import MovieList from "./MovieList";
import Filter from "./Filter";
import AddMovieForm from "./AddMovieForm";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      rating: 4.5,
    },
    {
      title: "The Shawshank Redemption",
      description: "Two imprisoned men bond over a number of years.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
      rating: 4.8,
    },
    {
      title: "The Godfather",
      description:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      rating: 4.7,
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilter = ({ title, rating }) => {
    const filtered = movies.filter((movie) => {
      const matchTitle = movie.title
        .toLowerCase()
        .startsWith(title.toLowerCase());
      if (rating && movie.rating !== parseFloat(rating)) return false;
      return (
        matchTitle && (rating ? movie.rating === parseFloat(rating) : true)
      );
    });
    setFilteredMovies(filtered);
  };

  const addMovie = (movie) => {
    const updatedMovies = [...movies, movie];
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies); // Update filteredMovies as well
  };

  return (
    <div className="app">
      <h1>My Movie App</h1>
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
      <AddMovieForm onAddMovie={addMovie} />
    </div>
  );
};

export default App;
