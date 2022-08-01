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
      </div>
    </div>
  );
};
