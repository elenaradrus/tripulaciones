import { useState } from 'react';
import { Button } from './Button';
import './PreguntaCard.css';

export const PreguntaCard = ({
  imagen,
  texto,
  opcion1,
  opcion2,
  opcion3,
  opcion4,
  respuesta,
}) => {
  const [answer, setAnswer] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [colorBoton1, setColorBoton1] = useState('blue');
  const [colorBoton2, setColorBoton2] = useState('blue');
  const [colorBoton3, setColorBoton3] = useState('blue');
  const [colorBoton4, setColorBoton4] = useState('blue');

  return (
    <>
      <div className='container-questions'>
        <center>
          <img src={imagen} alt='imagen' />
        </center>
        <div className='containerText'>
          <p className='questionDetail'>{texto}</p>
        </div>

        <div className='questionButtons'>
          <Button
            onClick={() => {
              setAnswer(respuesta === opcion1);
              setWrong(!(respuesta === opcion1));
              if (respuesta === opcion1) {
                setColorBoton1('green');
                setColorBoton2('blue');
                setColorBoton3('blue');
                setColorBoton4('blue');
              } else {
                setColorBoton1('red');
                setColorBoton2('blue');
                setColorBoton3('blue');
                setColorBoton4('blue');
              }
              setTimeout(() => {
                setColorBoton1('blue');
                setColorBoton2('blue');
                setColorBoton3('blue');
                setColorBoton4('blue');
              }, 3000);
            }}
            buttonColor={colorBoton1}
            buttonSize='btn--mobile'
          >
            {opcion1}
          </Button>
          <Button
            onClick={() => {
              setAnswer(respuesta === opcion2);
              setWrong(!(respuesta === opcion2));
              if (respuesta === opcion2) {
                setColorBoton1('blue');
                setColorBoton2('green');
                setColorBoton3('blue');
                setColorBoton4('blue');
              } else {
                setColorBoton1('blue');
                setColorBoton2('red');
                setColorBoton3('blue');
                setColorBoton4('blue');
              }
              setTimeout(() => {
                setColorBoton1('blue');
                setColorBoton2('blue');
                setColorBoton3('blue');
                setColorBoton4('blue');
              }, 3000);
            }}
            buttonColor={colorBoton2}
            buttonSize='btn--mobile'
          >
            {opcion2}
          </Button>
          <Button
            onClick={() => {
              setAnswer(respuesta === opcion3);
              setWrong(!(respuesta === opcion3));
              if (respuesta === opcion3) {
                setColorBoton1('blue');
                setColorBoton2('blue');
                setColorBoton3('green');
                setColorBoton4('blue');
              } else {
                setColorBoton1('blue');
                setColorBoton2('blue');
                setColorBoton3('red');
                setColorBoton4('blue');
              }
              setTimeout(() => {
                setColorBoton1('blue');
                setColorBoton2('blue');
                setColorBoton3('blue');
                setColorBoton4('blue');
              }, 3000);
            }}
            buttonColor={colorBoton3}
            buttonSize='btn--mobile'
          >
            {opcion3}
          </Button>
          <Button
            onClick={() => {
              setAnswer(respuesta === opcion4);
              setWrong(!(respuesta === opcion4));
              if (respuesta === opcion4) {
                setColorBoton1('blue');
                setColorBoton2('blue');
                setColorBoton3('blue');
                setColorBoton4('green');
              } else {
                setColorBoton1('blue');
                setColorBoton2('blue');
                setColorBoton3('blue');
                setColorBoton4('red');
              }
              setTimeout(() => {
                setColorBoton1('blue');
                setColorBoton2('blue');
                setColorBoton3('blue');
                setColorBoton4('blue');
              }, 3000);
            }}
            buttonColor={colorBoton4}
            buttonSize='btn--mobile'
          >
            {opcion4}
          </Button>
        </div>
        <div></div>
      </div>
    </>
  );
};
