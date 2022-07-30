import { useParams } from 'react-router-dom';
import { useFetchOnePregunta } from '../../hooks';
import { PreguntaCard } from '../PreguntaCard';
import './PreguntaPage.css'

export const PreguntaPage = () => {
  const { id } = useParams();
  const { data } = useFetchOnePregunta(id);

  return (
    <>
      <div className='questionsContainer'>
        <h1>Pregunta #1</h1>
        <PreguntaCard {...data} />
      </div>

    </>
  );
};
