import { Link } from 'react-router-dom';
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
  const respuestaOk = () => {
    console.log('Esta es la correcta');
  };
  return (
    <>
      <div>
        <h2>{detalle}</h2>
        <p>{texto}</p>
        <div>
          <Button buttonColor='blue'>{opcion1}</Button>
          <Button onClick={respuestaOk} buttonColor='blue'>
            {opcion2}
          </Button>
          <Button buttonColor='blue'>{opcion3}</Button>
          <Button buttonColor='blue'>{opcion4}</Button>
        </div>
      </div>
    </>
  );
};
