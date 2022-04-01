import "./App.css";
import data from "./contents/data";
import Home from "./components/Pages/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">{data}</header>
      <Home />
    </div>
  );
}

export default App;
