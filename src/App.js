import React from 'react';
import {calcs} from './components/Calculations'
import Form from './components/Form';
import Result from './components/Result';
import formula from './formula.png';

function App() {
  const [result, setResult] = React.useState('')
  const [inValue, setInvalue] = React.useState('esperando numero')
  return (
    <div className="App">
      <calcs/>
      <header className="App-header">
        <h1>Calculadora de series</h1>
      </header>
      <article>
        <img src={formula} className="formula" alt="formula" />
        <p>
          Introduce un numero y tu resultado sera acorde a esta formula
        </p>
        <section>
          <Form
           inValue={inValue}
           setInvalue={setInvalue}
          />
          <Result
            result={result}
            setResult={setResult}
            />
        </section>
      </article>
    </div>
  );
}

export default App;