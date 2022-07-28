import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useFetchOneTest } from '../../hooks';
import { Button } from '../Button';
import { PreguntaCard } from '../PreguntaCard';

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
