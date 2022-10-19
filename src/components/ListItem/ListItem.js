import React, { useState } from "react";
import Form from "../Form/Form";
import "./listItem.css";

function ListItem({ movie }) {
  let rating = [];
  const [edit, setEdit] = useState(false);
  if (movie) {
    for (let i = 1; i <= movie.rating; i++) {
      rating.push(
        <i className="material-icons" key={movie.name + i}>
          &#xe838;
        </i>
      );
    }

    function handleEdit() {
      setEdit(true);
    }

    function handleDelete() {
      let overlay = document.querySelector(".overlay");
      let dialog = document.querySelector("dialog");
      dialog.dataset.id = movie.id;
      overlay.classList.add("active");
      dialog.show();
    }
    if (!edit) {
      return (
        <li className="listItem">
          <div className="listDetails">
            <h2 className="movieName">{movie.name}</h2>
            <p>{movie.year}</p>
            <p>{movie.genre}</p>
            <p>{rating}</p>
          </div>
          <div className="listButtons">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </li>
      );
    } else {
      return <Form setEdit={setEdit} movie={movie} />;
    }
  }
}

export default ListItem;
