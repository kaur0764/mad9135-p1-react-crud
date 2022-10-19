import React from "react";
import { useNavigate } from "react-router-dom";
import "./appHeader.css";

function AppHeader() {
  const navigate = useNavigate();

  return (
    <>
      <header className="App-header">
        <h1>Movies To Watch</h1>
        <button onClick={() => navigate("/newmovie")}>Add Movie</button>
      </header>
    </>
  );
}

export default AppHeader;
