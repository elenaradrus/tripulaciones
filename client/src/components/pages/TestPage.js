import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useFetchOneTest } from '../../hooks';
import { Button } from '../Button';
import { PreguntaCard } from '../PreguntaCard';
import './TestPage.css'

export const TestPage = () => {
  const { test } = useParams();
  const { data } = useFetchOneTest(test);
  console.log(data);
  const { imagen, nombre, pregunta } = data;
  const handleOnClick = () => {
    console.log(pregunta);
  };
  return (
    <>
      <h1>Título del test</h1>
      <div className='imageTest'>
        <img src={imagen} alt={nombre} />
      </div>
      <div className='instructions'>Instrucciones de texto</div>
      <div className='buttonTest'>
        <Button
          onClick={handleOnClick}
          buttonColor='red'
          buttonSize='large'
          buttonStyle='primary'
        >
          {/* {nombre} */}
          <p className='textStartTest'>Empezar</p>
        </Button>
      </div>

    </>
  );
};
