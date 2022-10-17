import React from "react";
import { useNavigate } from "react-router-dom";
import "./appHeader.css";

function AppHeader() {
  const navigate = useNavigate();

  return (
    <>
      <header className="App-header">
        <h1>To Watch List</h1>
        <button onClick={() => navigate("/newmovie")}>Add New Movie</button>
      </header>
    </>
  );
}

export default AppHeader;
