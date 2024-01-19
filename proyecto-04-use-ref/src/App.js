import "./App.css";
import { Ejemplo } from "./components/Ejemplo";
import { Formulario } from "./components/Formulario";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Ejemplo />

        <Formulario />
      </header>
    </div>
  );
}

export default App;
