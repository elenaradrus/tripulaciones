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
<path d="M42 22.184C43.1046 22.184 44 23.0794 44 24.184V24.987C44 26.0916 43.1046 26.987 42 26.987H13.1931L19.5666 33.3605C20.3478 34.1417 20.3476 35.4085 19.5661 36.1894L18.9974 36.7577C18.2163 37.5383 16.9502 37.538 16.1694 36.757L5.41384 25.9996C4.63296 25.2186 4.63296 23.9524 5.41384 23.1714L16.1694 12.414C16.9502 11.633 18.2163 11.6327 18.9974 12.4133L19.5661 12.9816C20.3476 13.7625 20.3478 15.0292 19.5666 15.8105L13.1931 22.184H42Z" fill="#FF9E0F"/>
</svg>

        <h2>Detecta el...</h2>
      </div>
      <div className='testPageContainer'>
        <div className='imageTest'>
          <img className='testPageImg' src='/images/tutorialEmpezar.png' alt={nombre} />
        </div>
        <div className='instructions'>
          Aprende a identificar mails fraudulentos y a prevenir las estafas online.
          En el siguiente jercicio deberás ecoger correctamente entre cuatro opciones.
        </div>
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
