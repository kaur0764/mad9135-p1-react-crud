import React from "react";
import { useList } from "../../context/ListContext";
import { useNavigate } from "react-router-dom";
import "./form.css";

function Form() {
  const navigate = useNavigate();
  const [list, setList] = useList();

  function handleSubmit(ev) {
    ev.preventDefault();
    let name = document.querySelector("#movieName").value;
    name = name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
    let genre = document.querySelector("#movieGenre").value;
    genre = genre.charAt(0).toUpperCase() + genre.substring(1).toLowerCase();
    let year = document.querySelector("#movieYear").value.slice(0, 4);
    let rating = document.querySelector("#movieRating").value;
    let movie = {
      id: name,
      name,
      genre,
      year,
      rating,
    };

    setList(list.concat(movie));
    navigate("/");
  }

  function handleFormCancel() {
    navigate("/");
  }

  return (
    <form className="App" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>Movie Name</label>
        <input type="text" id="movieName" />
      </div>
      <div className="form-grid">
        <label>Genre</label>
        <input type="text" id="movieGenre" />
      </div>
      <div className="form-grid">
        <label>Release Year</label>
        <input type="text" id="movieYear" />
      </div>
      <div className="form-rating">
        <label>Rating</label>
        <input type="number" id="movieRating" min="0" max="5" />
      </div>
      <div className="form-grid">
        <button type="submit">Save</button>
        <button onClick={handleFormCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default Form;
