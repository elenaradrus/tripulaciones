import { useParams } from 'react-router-dom';
import { useFetchOneCategoria } from '../../hooks';
import { useFetchTests } from '../../hooks/useFetchTests';
import { TestCard } from '../TestCard';
import './CategoriaPage.css';

export const CategoriaPage = () => {
  const { id } = useParams();
  const { data } = useFetchOneCategoria(id);
  const { data: datos } = useFetchTests();





  return (
    <div>
      <h2 className='barra'>  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.82043 24L20.2649 8V16.8711L39.8204 16.8889V31.1111H20.2649V40L7.82043 24Z" fill="#FF9E0F" stroke="#FF9E0F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      {data?.titulo} </h2>
      <div className='logoFlecha'></div>
      <div className='categoryContainer'>
        {datos.map((test) => (
          <TestCard key={test._id} {...test} />
        ))}
      </div>

    </div>
  );
};
