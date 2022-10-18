import React from "react";
import { useList } from "../../context/ListContext";
import "./deleteDialog.css";

function DeleteDialog() {
  const [list, setList] = useList();

  function yesDelete() {
    let deleteDlg = document.querySelector("dialog");
    let newList = list.filter(function (item) {
      return item.id !== deleteDlg.dataset.id;
    });
    setList(newList);

    deleteDlg.dataset.id = "";
    deleteDlg.close();
    let overlay = document.querySelector(".overlay");
    overlay.classList.remove("active");
  }
  function cancelDelete() {
    let deleteDlg = document.querySelector("dialog");
    deleteDlg.dataset.id = "";
    deleteDlg.close();
    let overlay = document.querySelector(".overlay");
    overlay.classList.remove("active");
  }
  return (
    <div className="overlay">
      <dialog data-id="">
        <p>Are you sure you want to delete this movie?</p>
        <div className="dlgButtons">
          <button onClick={yesDelete}>YES, DELETE</button>
          <button onClick={cancelDelete}>CANCEL, KEEP</button>
        </div>
      </dialog>
    </div>
  );
}

export default DeleteDialog;
