import { useState } from 'react';
import { Button } from './Button';
import './PreguntaCard.css';
import { Navigate, useNavigate } from 'react-router-dom';

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
  const [colorBoton1, setColorBoton1] = useState('white');
  const [colorBoton2, setColorBoton2] = useState('white');
  const [colorBoton3, setColorBoton3] = useState('white');
  const [colorBoton4, setColorBoton4] = useState('white');

  const navigate = useNavigate();

  const handleOnClickResultado = () => {
    navigate('/respuestas')
  };

  return (
    <>
      <div className='container-questions'>
        <center>
          <img className='imagenPreguntaUno' src='/images/usurpacionIdentidad.png' alt='imagen' />
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
                setColorBoton2('white');
                setColorBoton3('white');
                setColorBoton4('white');
              } else {
                setColorBoton1('red');
                setColorBoton2('white');
                setColorBoton3('white');
                setColorBoton4('white');
              }
              setTimeout(() => {
                setColorBoton1('white');
                setColorBoton2('white');
                setColorBoton3('white');
                setColorBoton4('white');
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
                setColorBoton1('white');
                setColorBoton2('green');
                setColorBoton3('white');
                setColorBoton4('white');
              } else {
                setColorBoton1('white');
                setColorBoton2('red');
                setColorBoton3('white');
                setColorBoton4('white');
              }
              setTimeout(() => {
                setColorBoton1('white');
                setColorBoton2('white');
                setColorBoton3('white');
                setColorBoton4('white');
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
                setColorBoton1('white');
                setColorBoton2('white');
                setColorBoton3('green');
                setColorBoton4('white');
              } else {
                setColorBoton1('white');
                setColorBoton2('white');
                setColorBoton3('red');
                setColorBoton4('white');
              }
              setTimeout(() => {
                setColorBoton1('white');
                setColorBoton2('white');
                setColorBoton3('white');
                setColorBoton4('white');
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
                setColorBoton1('white');
                setColorBoton2('white');
                setColorBoton3('white');
                setColorBoton4('green');
              } else {
                setColorBoton1('white');
                setColorBoton2('white');
                setColorBoton3('white');
                setColorBoton4('red');
              }
              setTimeout(() => {
                setColorBoton1('white');
                setColorBoton2('white');
                setColorBoton3('white');
                setColorBoton4('white');
              }, 3000);
            }}
            buttonColor={colorBoton4}
            buttonSize='btn--mobile'
          >
            {opcion4}
          </Button>
        </div>
        <div className='containerBtnVerResultado'>
          <button className='btnVerResultado' buttonColor='green' onClick={handleOnClickResultado}>
            Ver resultado
          </button>
        </div>

      </div>
    </>
  );
};
