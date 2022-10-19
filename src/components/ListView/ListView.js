import React from "react";
import { useList } from "../../context/ListContext";
import ListItem from "../ListItem/ListItem";
import DeleteDialog from "../DeleteDialog/DeleteDialog";
import "./listView.css";

function ListView() {
  const [list, setList] = useList();
  if (!list.length) {
    return (
      <div className="instruction">
        <h2>Add movies you want to watch</h2>
        <div className="instructionIcons">
          <i className="material-icons humidity">&#xe02c;</i>
          <i className="material-icons humidity add">&#xe145;</i>
        </div>
      </div>
    );
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
