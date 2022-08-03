import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { useFetchPregunta } from '../../hooks';
import { Button } from '../Button';
import { PreguntaCard } from '../PreguntaCard';
import './PreguntaPage.css';

export const PreguntaPage = () => {
  const [contador, setContador] = useState(0);
  const navigate = useNavigate();
  const { data } = useFetchPregunta();
  let pregunta = data[contador];

  const handleOnClick = () => {
    if (contador < data.length - 1) {
      setContador(contador + 1);
    }
  };
  const handleOnClickResultado = () => {
    navigate('/respuestas')
  };
  return (
    <>
      <div className='questionsContainer'>
        <h2 className='numPregunta'>
          Pregunta {contador + 1}/{data.length}
          <button className='btnSiquientePregunta' onClick={handleOnClick}>
            <img className='flechaSiguientePregunta' src='/images/flechaderecha.png' alt='me gustas' />
          </button>
        </h2>

        <div>
          <PreguntaCard {...pregunta} />
        </div>


      </div>
    </>
  );
};
