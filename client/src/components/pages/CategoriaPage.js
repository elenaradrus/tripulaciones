import { useParams } from 'react-router-dom';
import { useFetchOneCategoria } from '../../hooks';
import { useFetchTests } from '../../hooks/useFetchTests';
import { TestCard } from '../TestCard';

export const CategoriaPage = () => {
  const { id } = useParams();
  const { data } = useFetchOneCategoria(id);
  const { data: datos } = useFetchTests();

  return (
    <>
      <div>
        <h1>{data?.titulo}</h1>
        {datos.map((test) => (
          <TestCard key={test._id} {...test} />
        ))}
      </div>
    </>
  );
};
