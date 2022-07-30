import './TutorialCard.css';
import ReactPlayer from 'react-player/youtube';
export const TutorialCard = ({ _id, titulo, subtitulo, media }) => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='player-wrapper'>
            <ReactPlayer
              url={media}
              width='100%'
              height='100%'
              className='react-player'
            />
          </div>
          <div className='col_datos'>
            <h2>{titulo}</h2>
            <h4>{subtitulo}</h4>
          </div>
        </div>
      </div>
    </>
  );
};
