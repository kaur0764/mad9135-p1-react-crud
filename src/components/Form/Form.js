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
    let genre = document.querySelector("#movieGenre").value;
    let year = document.querySelector("#movieYear").value;
    let movie = {
      id: name + year,
      name,
      genre,
      year,
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
        <input type="number" id="movieYear" />
      </div>
      <div className="form-grid">
        <button type="submit">Save</button>
        <button onClick={handleFormCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default Form;
