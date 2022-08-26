import React from "react";

export const Form = () => {
  let result = 100
  function handleSubmit(e){
    e.preventDefault()
    result++
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