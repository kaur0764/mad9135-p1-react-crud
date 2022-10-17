import React from "react";
import "./listItem.css";

function ListItem({ movie }) {
  if (movie) {
    return (
      <div className="listItem">
        <div className="listDetails">
          <p className="movieName">
            {movie.name} ({movie.year})
          </p>
          <p>{movie.genre}</p>
        </div>
        <div className="listButtons">
          <button type="submit">Save</button>
          <button type="submit">Cancel</button>
        </div>
      </div>
    );
  }
}

export default ListItem;
