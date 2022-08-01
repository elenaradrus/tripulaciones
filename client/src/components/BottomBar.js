import { FaAward, FaPuzzlePiece, FaUser } from 'react-icons/fa';
import { VscBook } from 'react-icons/vsc';
import { AiFillHome } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { NavLink } from 'react-router-dom';
import './BottomBar.css';

export const BottomBar = () => {
  return (
    <>
      <div className='container_bottombar'>
        <div className='iconos_bb'>
          <NavLink
            className={({ isActive }) =>
              `home-link ${isActive ? 'active-home' : ''}`
            }
            to='/home'
          >
            <p>
              <small>.</small>
            </p>
          </NavLink>
          <p>
            <small>Home</small>
          </p>
        </div>
        <div className='iconos_bb'>
          <NavLink
            className={({ isActive }) =>
              `tutoriales-link ${isActive ? 'active-tutoriales' : ''}`
            }
            to='/tutoriales'
          >
            <p>
              <small>.</small>
            </p>
          </NavLink>
          <p>
            <small>Tutorial</small>
          </p>
        </div>
        <div className='iconos_bb'>
          <NavLink
            className={({ isActive }) =>
              `aprendamos-link ${isActive ? 'active-aprendamos' : ''}`
            }
            to='/aprendamos'
          >
            <p>
              <small>.</small>
            </p>
          </NavLink>
          <p>
            <small>Aprende</small>
          </p>
        </div>
        <div className='iconos_bb'>
          <NavLink
            className={({ isActive }) =>
              `logros-link ${isActive ? 'active-logros' : ''}`
            }
            to='/logros'
          >
            <p>
              <small>.</small>
            </p>
          </NavLink>
          <p>
            <small>Logros</small>
          </p>
        </div>
        <div className='iconos_bb'>
          <NavLink
            className={({ isActive }) =>
              `perfil-link ${isActive ? 'active-perfil' : ''}`
            }
            to='/perfil'
          >
            <p>
              <small className='perfil'>.</small>
            </p>
          </NavLink>
          <p>
            <small className='perfil'>Perfil</small>
          </p>
        </div>
      </div>
    </>
  );
};
