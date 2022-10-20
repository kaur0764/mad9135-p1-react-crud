import React from "react";
import { useList } from "../../context/ListContext";
import { useNavigate } from "react-router-dom";
import "./form.css";

function Form({ setEdit, movie }) {
  const navigate = useNavigate();
  const [list, setList] = useList([]);
  let initialValues = "";
  let movieId = "";
  if (movie) {
    movieId = movie.id;
    initialValues = {
      name: movie.name,
      genre: movie.genre,
      year: movie.year,
      rating: movie.rating,
    };
  }

  let presentYear = new Date().getFullYear();

  function handleSubmit(ev) {
    ev.preventDefault();
    let name = document.querySelector("#movieName").value;
    name = name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
    let genre = document.querySelector("#movieGenre").value;
    genre = genre.charAt(0).toUpperCase() + genre.substring(1).toLowerCase();
    let year = document.querySelector("#movieYear").value.slice(0, 4);
    let rating = document.querySelector("#movieRating").value;
    let movie = {
      id: name + year,
      name,
      genre,
      year,
      rating,
    };

    if (!movieId) {
      setList(list.concat(movie));
    } else {
      let newList = list.map(function (item) {
        if (item.id === movieId) {
          return movie;
        }
        return item;
      });
      setList(newList);
      if (setEdit) {
        setEdit(false);
      }
    }

    navigate("/");
  }

  function handleFormCancel() {
    if (setEdit) {
      setEdit(false);
    }
    navigate("/");
  }

  return (
    <form className="App" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label htmlFor="movieName">Movie Name</label>
        <input
          defaultValue={initialValues.name}
          type="text"
          id="movieName"
          name="movieName"
          required
        />
      </div>
      <div className="form-grid">
        <label htmlFor="movieYear">Release Year</label>
        <input
          defaultValue={initialValues.year}
          type="number"
          min="1800"
          max={presentYear}
          id="movieYear"
          name="movieYear"
          required
        />
      </div>
      <div className="form-grid">
        <label htmlFor="movieGenre">Genre</label>
        <input
          defaultValue={initialValues.genre}
          type="text"
          id="movieGenre"
          name="movieGenre"
          required
        />
      </div>
      <div className="form-grid">
        <label htmlFor="movieRating">Rating</label>
        <input
          defaultValue={initialValues.rating}
          type="number"
          id="movieRating"
          name="movieRating"
          min="0"
          max="5"
          required
        />
      </div>
      <div className="form-grid">
        <button type="submit">Save</button>
        <button onClick={handleFormCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default Form;
