import React, { useState } from 'react';
import Form from './components/Form';
import Result from './components/Result';
import formula from './formula.png';
function App() {
  const [value, setValue] = useState('(esperando numero)');
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora de series</h1>
      </header>
      <article>
        <img src={formula} className="formula" alt="formula" />
        <p>
          Introduce un numero y tu resultado sera acorde a esta formula
        </p>
        <section>
          <Form set={setValue}/>
          <Result value={value} />
        </section>
      </article>
    </div>
  );
}

export default App;