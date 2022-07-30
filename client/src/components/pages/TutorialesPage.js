import { useFetchTutorial } from '../../hooks';
import { TutorialCard } from '../TutorialCard';

export const TutorialesPage = () => {
  const { data } = useFetchTutorial();
  return (
    <>
      <h1>
        <center>Tutoriales</center>
      </h1>
      <hr />
      {data.map((tutorial) => (
        <TutorialCard key={tutorial._id} {...tutorial} />
      ))}
    </>
  );
};
