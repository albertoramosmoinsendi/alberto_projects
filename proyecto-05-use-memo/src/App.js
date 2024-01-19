import logo from "./logo.svg";
import "./App.css";
// Ejercicio con método useMemo para componentes:
// import { Gestion } from "./components/Gestion";

// Ejercicio con hook useMemo:
import { Tareas } from "./components/Tareas";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Gestion /> */}
        <Tareas />
      </header>
    </div>
  );
}

export default App;
