import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";
import React from "react";
import Form from "../Form/Form";

function NewItemView() {
  return (
    <>
      <h2>Add a new movie</h2>
      <Form></Form>
    </>
  );
}

export default NewItemView;
