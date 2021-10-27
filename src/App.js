import "./App.css";
import "./components/Developer";
import { Developer } from "./components/Developer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Card de Pessoas</h1>
        <div className="Container">
          <Developer name="Gabriel" age="18" country="Brasil" />
          <Developer name="Filipe" age={28} country="Brasil" />
          <Developer name="Mariana" age={24} country="Itália" />
        </div>
      </header>
    </div>
  );
}

export default App;
