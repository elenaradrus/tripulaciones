import { Link } from 'react-router-dom';

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
      <Link to={_id}>
        <figure>
          <img src={imagen} alt={nombre} />
          <figcaption>
            {nombre}
            {descripcion}
            {nivel}
          </figcaption>
        </figure>
      </Link>
    </>
  );
};
