import { JuegoCard } from '../JuegoCard';
import './HomePage.css';
export const HomePage = () => {
  return (
    <div className='contenedorPrincipal'>
      <h1 className='titulo'>Bienvenido</h1>
      <div className='contenedorImagen'>
        <figure>
          <img src='/images/young_female.jpg' alt='young female' />
          <figcaption>Asociación Emancipatic</figcaption>
        </figure>
        <p className='texto'>FELICIDADES POR JUGAR 5 DÍAS SEGUIDOS</p>
        <div className='recomendaciones'>Recomendaciones</div>
        <JuegoCard id={'62e434e6e54dd6a34c831d25'} />
        <JuegoCard id={'62e434e6e54dd6a34c831d28'} />
      </div>
    </div>
  );
};
