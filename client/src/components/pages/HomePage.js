import './HomePage.css';
export const HomePage = () => {
  return (
    <div className="contenedorPrincipal">
      <h1 className="titulo">EMANCIPATIC</h1>
      <div className='contenedorImagen'>
        <figure>
          <img src='/images/young_female.jpg' alt='young female' />
          <figcaption>An elephant at sunset</figcaption>
        </figure>
        <p className="texto">FELICIDADES POR JUGAR 5 DÍAS SEGUIDOS</p>
        <div className="recomendaciones">Recomendaciones</div>
      </div>
    </div>
  );
};
