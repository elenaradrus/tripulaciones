import { useState } from 'react';
import { Button } from './Button';

export const PreguntaCard = ({
  detalle,
  texto,
  opcion1,
  opcion2,
  opcion3,
  opcion4,
  respuesta,
}) => {
  const [answer, setAnswer] = useState(false);
  const [wrong, setWrong] = useState(false);

  return (
    <>
      <div>
        <h2>{detalle}</h2>
        <p>{texto}</p>
        <ul>
          <li>Opcion 1 : {opcion1}</li>
          <li>Opcion 2 : {opcion2}</li>
          <li>Opcion 3 : {opcion3}</li>
          <li>Opcion 4 : {opcion4}</li>
        </ul>
        <div>
          <Button
            onClick={() => {
              setAnswer(respuesta === opcion1);
              setWrong(!(respuesta === opcion1));
            }}
            buttonColor='blue'
          >
            Opcion 1
          </Button>
          <Button
            onClick={() => {
              setAnswer(respuesta === opcion2);
              setWrong(!(respuesta === opcion2));
            }}
            buttonColor='blue'
          >
            Opcion 2
          </Button>
          <Button
            onClick={() => {
              setAnswer(respuesta === opcion3);
              setWrong(!(respuesta === opcion3));
            }}
            buttonColor='blue'
          >
            Opcion 3
          </Button>
          <Button
            onClick={() => {
              setAnswer(respuesta === opcion4);
              setWrong(!(respuesta === opcion4));
            }}
            buttonColor='blue'
          >
            Opcion 4
          </Button>
        </div>
        <div>
          <p>
            {answer
              ? `Correcto!!! ${respuesta}`
              : wrong
              ? 'Te has equivocado'
              : ''}
          </p>
        </div>
      </div>
    </>
  );
};
