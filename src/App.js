import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import { ListProvider } from "./context/ListContext";
import { Routes, Route } from "react-router-dom";
import ListView from "./components/ListView/ListView";
import NewItemView from "./components/NewItemView/NewItemView";

function App() {
  return (
    <ListProvider>
      <div className="App">
        <AppHeader />
        <Routes>
          <Route path="/" element={<ListView />} />
          <Route path="/newmovie" element={<NewItemView />} />
        </Routes>
      </div>
    </ListProvider>
  );
}

export default App;
