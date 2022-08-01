import { useState } from 'react';
import { Link } from 'react-router-dom';

const iconos = {
  imagenurl1: '/public/',
  imagenurl2: '/public/',
  imagenurl3: '/public/',
  imagenurl4: '/public/',
  imagenurl5: '/public/',
  imagenalt1: '/public/',
  imagenalt2: '/public/',
  imagenalt3: '/public/',
  imagenalt4: '/public/',
  imagenalt5: '/public/',
};
export const BottomBarImg = (...iconos) => {
  const [icono, setIcono] = useState('');
  return (
    <>
      <div>
        <div>
          <Link>
            <button>
              <img src={iconos.imagenurl1} alt={iconos.imagenalt1} />
            </button>
          </Link>
          <Link>
            <img src={iconos.imagenurl2} alt={iconos.imagenalt2} />
          </Link>
          <Link>
            <img src={iconos.imagenurl3} alt={iconos.imagenalt3} />
          </Link>
          <Link>
            <img src={iconos.imagenurl4} alt={iconos.imagenalt4} />
          </Link>
          <Link>
            <img src={iconos.imagenurl5} alt={iconos.imagenalt5} />
          </Link>
        </div>
      </div>
    </>
  );
};
