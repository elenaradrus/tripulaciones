import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Counter = ({ valor = 0 }) => {
  const [state, setState] = useState(valor);
  const incrementar = () => {
    setState(state + 1);
  };
  const resetear = () => {
    setState(valor);
  };
  const decrementar = () => {
    setState(state - 1);
  };
  return (
    <>
      <h1>CounterApp</h1>
      <p>{state}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={resetear}>resetear</button>
      <button onClick={decrementar}>Decrementar</button>
    </>
  );
};

Counter.propTypes = {
  valor: PropTypes.number.isRequired,
};

export default Counter;
