import React from "react";
import { useList } from "../../context/ListContext";
import ListItem from "../ListItem/ListItem";
import DeleteDialog from "../DeleteDialog/DeleteDialog";

function ListView() {
  const [list, setList] = useList();
  if (!list.length) {
    return <p>Add movies you want to watch</p>;
  } else {
    return (
      <div className="listView">
        <ul>
          {list.map((movie) => (
            <ListItem key={movie.id} movie={movie} />
          ))}
        </ul>
        <DeleteDialog></DeleteDialog>
      </div>
    );
  }
}

export default ListView;
