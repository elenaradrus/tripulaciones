import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { useForm } from '../hooks';
import { Button } from './Button';


import './LoginForm.css';
export const LoginForm = () => {
  const { setUser } = useContext(UserContext);
  const [mensaje, setMensaje] = useState('');
  const { email, password, onInputChange, onResetForm } = useForm();

  const navigate = useNavigate();

  const loginSubmit = async (event) => {
    event.preventDefault();
    try {
      let data = { email, password };

      await fetch('http://localhost:443/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((res) => {
          window.localStorage.setItem('token', JSON.stringify(res.token));

          onResetForm();
          setUser(res.user);
          if (res.ok) {
            navigate('/home');
          } else {
            setMensaje(res.msg);
          }
        })
        .catch((error) => {
          console.log(error);
          window.localStorage.setItem('token', '');
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='contenedorLoginEntero'>
     <img
        className='loginLogo'
        src='/images/logoEmancipatic.png'
        alt='young female'
      /> 

      <form className='formularioLogin' onSubmit={loginSubmit}>
        <div className='inputCorreo'>
        <label for="Usuario">Usuario 
       </label>

          <input
            type='email'
            className=''
            placeholder='Correo'
            name='email'
            value={email}
            onChange={onInputChange}
          />
        </div>
       
        <div className='inputContrasena'>
        <label for="Contrasena">Contraseña 
       </label>
          <input
            type='password'
            className=''
            placeholder='Contraseña'
            name='password'
            value={password}
            onChange={onInputChange}
          />
        </div>
        <div className='checkYLabel'>    
        <div className='contenedorSwitch'> 
        <p className='recordarContrasena' >Recordar contarseña</p>

          <label class="switch"> 
          <input type="checkbox"/>
          <span class="slider round"></span></label>
          </div>
          
          
          
          
{/*           <label for='switch'>Recordar contraseña</label>
 */}        </div>

        <button class="botonAmarillo">
        <p className='botonAcceder'>ACCEDER</p>  
        </button>
      </form>
      {/* <div>
        <Button
          onClick={signInWithGoogle}
          buttonStyle='btn--primary'
          buttonColor='blue'
          buttonSize='large'
        >
          Login con Google
        </Button>
      </div> */}

      <div className='llevarAlRegistro'>
        ¿Primera vez?      
      
      <Link to='registro'> Regístrate</Link>
      {mensaje}
    </div>
    </div>
  );
};
