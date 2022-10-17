import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import { useList } from "./context/ListContext";
import NewItemView from "./components/NewItemView/NewItemView";

function App() {
  const [list, setList] = useList();
  return (
    <div className="App">
      <AppHeader />
      <NewItemView />
    </div>
  );
}

export default App;
