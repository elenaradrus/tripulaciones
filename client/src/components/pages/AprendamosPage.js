import { useFetchCategoria } from '../../hooks/useFetchCategoria';
import { CategoriaCard } from '../CategoriaCard';
import './AprendamosPage.css';

export const AprendamosPage = () => {
  const { data } = useFetchCategoria();
  return (
    <>
      <h1>Aprendamos</h1>
      <div className='list'>
        {data.map((categoria) => (

          <CategoriaCard key={categoria._id} {...categoria} />
        ))}
      </div>

    </>
  );
};
