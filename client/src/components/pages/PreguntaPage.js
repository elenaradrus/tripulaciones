import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import { useFetchPregunta } from '../../hooks';
import { Button } from '../Button';
import { PreguntaCard } from '../PreguntaCard';
import './PreguntaPage.css';

export const PreguntaPage = () => {
  const [contador, setContador] = useState(0);

  const { data } = useFetchPregunta();
  let pregunta = data[contador];

  const handleOnClick = () => {
    if (contador < data.length - 1) {
      setContador(contador + 1);
    }
  };
  const handleOnClickResultado = () => {
    return <Navigate to='respuestas' />;
  };
  return (
    <>
      <div className='questionsContainer'>
        <h2 className='numPregunta'>
        <Button buttonColor='green' onClick={handleOnClickResultado}>
          Ver resultado
        </Button>
          Pregunta {contador + 1}/{data.length}
          <Button onClick={handleOnClick}>
            <img src='/images/flechaderecha.png' alt='me gustas' />
          </Button>
        </h2>

        <div>
          <PreguntaCard {...pregunta} />
        </div>
        
        <div className='boton_siguiente'></div>
      </div>
    </>
  );
};
