import { useFetchCategoria } from '../../hooks/useFetchCategoria';
import { CategoriaCard } from '../CategoriaCard';
import './AprendamosPage.css';

export const AprendamosPage = () => {
  const { data } = useFetchCategoria();
  return (
    <>
      <h2 className='aprendamosTitle'>Aprendamos</h2>
      <div className='list'>
        {data.map((categoria) => (
          <CategoriaCard key={categoria._id} {...categoria} />
        ))}
      </div>
      

    </>
  );
};
