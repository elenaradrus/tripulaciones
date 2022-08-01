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
      <div className='titleTestPage'>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.82043 24L20.2649 8V16.8711L39.8204 16.8889V31.1111H20.2649V40L7.82043 24Z" fill="#FF9E0F" stroke="#FF9E0F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <h2>Detecta el...</h2>
      </div>
      <div className='testPageContainer'>
        <div className='imageTest'>
          <img className='testPageImg' src={imagen} alt={nombre} />
        </div>
        <div className='instructions'>Instrucciones de texto</div>
      </div>

      <div className='buttonTest'>
        <Button
          onClick={handleOnClick}
          buttonColor='orange'
          buttonSize='large'
          buttonStyle='primary'
        >
          {/* {nombre} */}
          <p className='textStartTest'>Comenzar</p>
        </Button>
      </div>

    </>
  );
};
