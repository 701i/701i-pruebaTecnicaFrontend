import React from "react";

export const Form = (inValue, setInvalue) => {

  function handleSubmit(e){
    e.preventDefault()
    console.log(e.target[0].value);
    setInvalue(e.target[0].value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="numeros naturales" id="number" min="0"/>
        <button type="submit">🔍</button>
      </form>
    </>
  );
};

export default Form;