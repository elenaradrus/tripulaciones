import { useParams } from 'react-router';
import { Link, useNavigate } from 'react-router-dom';
import { useFetchOneTest } from '../../hooks';
import { Button } from '../Button';
import { PreguntaCard } from '../PreguntaCard';

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
      <figure>
        <img src={imagen} alt={nombre} />
        <figcaption>{nombre}</figcaption>
      </figure>
      <div>Instrucciones de texto</div>
      <Button
        onClick={handleOnClick}
        buttonColor='red'
        buttonSize='large'
        buttonStyle='primary'
      >
        {nombre}
      </Button>
    </>
  );
};
