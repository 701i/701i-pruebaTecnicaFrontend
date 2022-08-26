import formula from './formula.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora de series</h1>
        <img src={formula} className="formula" alt="formula" />
        <p>
          Introduce un numero y tu resultado sera acorde a esta formula
        </p>
      </header>
    </div>
  );
}

export default App;