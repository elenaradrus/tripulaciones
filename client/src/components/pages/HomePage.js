import { JuegoCard } from '../JuegoCard';
import './HomePage.css';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';


export const HomePage = () => {
  const { user } = useContext(UserContext)
  return (
    <div className='contenedorPrincipal'>

      <div className='headerBienvenido'>
        <h2 className='titulo'>Bienvenido</h2>
      </div>

      <div className='helloText'>
        <h2>¡Hola, {user?.nombre}! </h2>
      </div>

      <div className='contenedorImagen'>
        <figure className='homeText'>
          <img className='homePicture' src='/images/homePicture.png' alt='young female' />
          <h3>¡Felicidades!</h3>
          <p className='texto'>Llevas 5 días seguidos <br /> de lecciones</p>
        </figure>
        <div className='recomendaciones'>Recomendaciones</div>
        <JuegoCard id={'62e434e6e54dd6a34c831d25'} />
        <JuegoCard id={'62e434e6e54dd6a34c831d28'} />
      </div>

      <div className='recomendaciones'>
        <h2>
          Recomendaciones
        </h2>
      </div>

    </div>
  );
};
