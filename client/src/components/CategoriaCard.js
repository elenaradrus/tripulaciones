import { Link } from 'react-router-dom';

import './CategoriaCard.css'

export const CategoriaCard = ({ _id, titulo, imagen }) => {
  return (
      <Link to={_id} className='topicsLink'>
        <div className='topicsToLearn'>

          <div className='topics'>
            <img className='categoryCardImg' src={imagen} alt={titulo} />
            <div className='topicTitle'>{titulo}</div>
          </div>
        </div>
      </Link>
  );
};
