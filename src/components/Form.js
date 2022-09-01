import React from "react";
import {Calcs} from './Calculations'
export const Form = (props) => {

  function handleSubmit(e){
    e.preventDefault()
    console.log(e.target[0].value, Calcs(parseInt(e.target[0].value)));
    props.set(Calcs(parseInt(e.target[0].value)));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="numeros naturales" id="number" min="0" required/>
        <button type="submit">🔍</button>
      </form>
    </>
  );
};

export default Form;