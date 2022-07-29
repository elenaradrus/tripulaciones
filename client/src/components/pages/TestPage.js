import { useParams } from 'react-router';
import { Link, useNavigate } from 'react-router-dom';
import { useFetchOneTest } from '../../hooks';
import { Button } from '../Button';
import { PreguntaCard } from '../PreguntaCard';
import './TestPage.css'

export const TestPage = () => {
  const { test } = useParams();
  const { data } = useFetchOneTest(test);
  const navigate = useNavigate();
  const { imagen, nombre, pregunta } = data;
  const handleOnClick = () => {
    navigate(`../../../pregunta/${pregunta}`, { replace: true });
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
