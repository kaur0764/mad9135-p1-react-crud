import React from "react";
import "./form.css";

function Form() {
  function handleSubmit() {}
  return (
    <form className="App" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>Movie Name</label>
        <input type="text" />
      </div>
      <div className="form-grid">
        <label>Genre</label>
        <input type="text" />
      </div>
      <div className="form-grid">
        <label>Release Year</label>
        <input type="number" />
      </div>
      <div className="form-grid">
        <button type="submit">Save</button>
        <button type="submit">Cancel</button>
      </div>
    </form>
  );
}

export default Form;
