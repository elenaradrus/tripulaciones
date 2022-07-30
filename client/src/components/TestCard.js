import { Link } from 'react-router-dom';
import './TestCard.css';

export const TestCard = ({
  _id,
  imagen,
  nombre,
  descripcion,
  nivel,
  valoracion,
  user_name,
  categoria,
  pregunta,
}) => {
  return (
    <>
      <Link to={_id} className='gamesLink'>
        <div className='mainContainer'>
          <div className='image'>
            <img className='testCardImg' src={imagen} alt={nombre} />
          </div>

          <div className='information'>
            
              <div className='name'>
                {nombre}
              </div>
              <div className='level'>
                {nivel}
              </div>
              <div className='description'>
                {descripcion}
              </div>

          </div>
        </div>
      </Link>
    </>
  );
};
