import logo from './logo.svg';
import './App.css';
import Canvas from "./Canvas";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Canvas style={{height: "100%", width: "100%"}}/>
      </header>
    </div>
  );
}

export default App;
