import React from "react";
import "./listItem.css";

function ListItem({ movie }) {
  let rating = [];
  if (movie) {
    for (let i = 1; i <= movie.rating; i++) {
      rating.push(<i className="material-icons">&#xe838;</i>);
    }
    function handleDelete() {
      let overlay = document.querySelector(".overlay");
      let dialog = document.querySelector("dialog");
      dialog.dataset.id = movie.id;
      overlay.classList.add("active");
      dialog.show();
    }
    return (
      <li className="listItem">
        <div className="listDetails">
          <p className="movieName">
            {movie.name} ({movie.year})
          </p>
          <p>{movie.genre}</p>
          <p>{rating}</p>
        </div>
        <div className="listButtons">
          <button>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </li>
    );
  }
}

export default ListItem;
