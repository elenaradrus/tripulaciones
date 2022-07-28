import { Link } from 'react-router-dom';

export const CategoriaCard = ({ _id, titulo, imagen }) => {
  return (
    <>
      <Link to={_id}>
        <figure>
          <img src={imagen} alt={titulo} />
          <figcaption>{titulo}</figcaption>
        </figure>
      </Link>
    </>
  );
};
