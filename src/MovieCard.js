import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ title, description, posterURL, rating }) => {
  const navigate = useNavigate();

  return (
    <div className="movie-card" onClick={() => navigate(`/movie/${title}`)}>
      <img src={posterURL} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Rating: {rating}</p>
    </div>
  );
};

export default MovieCard;
