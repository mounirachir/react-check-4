import React, { useState } from "react";

const AddMovieForm = ({ onAddMovie }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState("");
  const [trailerURL, setTrailerURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !posterURL || !rating || !trailerURL) return;
    onAddMovie({
      title,
      description,
      posterURL,
      rating: parseFloat(rating),
      trailerURL,
    });
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating("");
    setTrailerURL("");
  };

  return (
    <form className="add-movie-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <input
        type="text"
        placeholder="Trailer URL"
        value={trailerURL}
        onChange={(e) => setTrailerURL(e.target.value)}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovieForm;
