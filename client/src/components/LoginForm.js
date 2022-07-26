import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hooks';

import './LoginForm.css';
export const LoginForm = () => {
  const [mensaje, setMensaje] = useState('');
  const { email, password, onInputChange, onResetForm } = useForm();

  const navigate = useNavigate();

  const loginSubmit = async (event) => {
    event.preventDefault();
    try {
      let data = { email, password };

      await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((res) => {
          window.localStorage.setItem('token', JSON.stringify(res.token));

          onResetForm();

          if (res.ok) {
            navigate('/');
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
    <>
      <form onSubmit={loginSubmit}>
        <div className=''>
          <input
            type='text'
            className=''
            placeholder='Correo'
            name='email'
            value={email}
            onChange={onInputChange}
          />
        </div>
        <div className=''>
          <input
            type='password'
            className=''
            placeholder='Contraseña'
            name='password'
            value={password}
            onChange={onInputChange}
          />
        </div>
        <div className=''>
          <input type='submit' className='' value='Login' />
        </div>
      </form>
      {mensaje}
    </>
  );
};
