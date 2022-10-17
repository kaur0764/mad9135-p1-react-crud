import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import { useList } from "./context/ListContext";
import { Routes, Route } from "react-router-dom";
import ListView from "./components/ListView/ListView";
import NewItemView from "./components/NewItemView/NewItemView";

function App() {
  const [list, setList] = useList();
  return (
    <div className="App">
      <AppHeader />
      <Routes>
        <Route path="/" element={<ListView list={list} />} />
        <Route path="/newmovie" element={<NewItemView />} />
      </Routes>
    </div>
  );
}

export default App;
