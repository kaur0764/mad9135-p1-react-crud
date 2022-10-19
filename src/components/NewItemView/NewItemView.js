import React from "react";
import Form from "../Form/Form";
import "./newItemView.css";

function NewItemView() {
  return (
    <div className="newItem">
      <h2>Add a new movie</h2>
      <Form></Form>
    </div>
  );
}

export default NewItemView;
