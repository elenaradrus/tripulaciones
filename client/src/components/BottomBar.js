import {
  FaAward,
  FaGraduationCap,
  FaHome,
  FaPuzzlePiece,
  FaUser,
} from 'react-icons/fa';

import { NavLink } from 'react-router-dom';
import './BottomBar.css';

export const BottomBar = () => {
  return (
    <>
      <div className='container_bottombar'>
        <NavLink
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          to='/'
        >
          <FaHome className='bottombar_icono' />
          <p>
            <small>Home</small>
          </p>
        </NavLink>
        <NavLink
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          to='/tutoriales'
        >
          <FaGraduationCap className='bottombar_icono' />
          <p>
            <small>Tutoriales</small>
          </p>
        </NavLink>
        <NavLink
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          to='/aprendamos'
        >
          <FaPuzzlePiece className='bottombar_icono' />
          <p>
            <small>Aprendamos</small>
          </p>
        </NavLink>
        <NavLink
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          to='/logros'
        >
          <FaAward className='bottombar_icono' />
          <p>
            <small>Logros</small>
          </p>
        </NavLink>
        <NavLink
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          to='/login'
        >
          <FaUser className='bottombar_icono' />
          <p>
            <small>Perfil</small>
          </p>
        </NavLink>
      </div>
    </>
  );
};
