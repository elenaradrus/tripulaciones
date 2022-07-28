import { useFetchCategoria } from '../../hooks/useFetchCategoria';
import { CategoriaCard } from '../CategoriaCard';

export const AprendamosPage = () => {
  const { data } = useFetchCategoria();
  return (
    <>
      <h1>Aprendamos</h1>
      {data.map((categoria) => (
        <CategoriaCard key={categoria._id} {...categoria} />
      ))}
    </>
  );
};
