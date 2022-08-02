import { Link } from 'react-router-dom';
import { useFetchOneJuego } from '../hooks';

import './JuegoCard.css';

export const JuegoCard = ({ id }) => {
  const { data } = useFetchOneJuego(id);
  const {
    titulo_juego,
    nivel_juego,
    descripcion_juego,
    imagen_juego,
    instrucciones_juego,
    categorias,
    promedio_valoracion,
  } = data;
  console.log(data);
  return (
    <div className='topicsToLearn'>
      <div className='topics'>
        <img
          className='categoryCardImg'
          src={imagen_juego}
          alt={titulo_juego}
        />
        <div className='topicTitle'>
          <p className='category-Title'>{titulo_juego}</p>
          <p className='category-Title'>{descripcion_juego}</p>
        </div>
      </div>
    </div>
  );
};
