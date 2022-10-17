import React from "react";
import ListItem from "../ListItem/ListItem";

function ListView({ list }) {
  if (!list.length) {
    return <p>Add movies you want to watch</p>;
  } else {
    return list.map((movie) => <ListItem key={movie.id} movie={movie} />);
  }
}

export default ListView;
