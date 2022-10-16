import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import { useList } from "./context/context";
import { ListProvider } from "./context/context";

function App() {
  const [list, setList] = useList();
  return (
    <ListProvider>
      <div className="App">
        <AppHeader />
      </div>
    </ListProvider>
  );
}

export default App;
