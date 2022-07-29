import { useParams } from 'react-router-dom';
import { useFetchOnePregunta } from '../../hooks';
import { PreguntaCard } from '../PreguntaCard';

export const PreguntaPage = () => {
  const { id } = useParams();
  const { data } = useFetchOnePregunta(id);

  return (
    <>
      <h1>Pregunta</h1>
      <PreguntaCard {...data} />
    </>
  );
};
