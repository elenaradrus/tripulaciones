import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hooks';
import { Link } from 'react-router-dom';

import './RegisterForm.css';
export const RegisterForm = () => {
  const [mensaje, setMensaje] = useState('');
  const {
    nombre,
    apellidos,
    email,
    password,
    direccion,
    telefono,

    onInputChange,
    onResetForm,
  } = useForm();

  const navigate = useNavigate();

  const loginSubmit = async (event) => {
    event.preventDefault();
    try {
      let data = { nombre, apellidos, email, password, direccion, telefono };

      await fetch('${process.env.REACT_APP_URI_BASE}/users', {
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
    <div className='contenedorGrandeRegistro'>
      <div className='mensajePrincipal'>
      <h2 className='mayusculas'>FORMULARIO DE NUEVO REGISTRO</h2>
        <h3>¡Estás a un paso de la digitalización!</h3>
      </div>
      <form className='formularioRegistroEntero' onSubmit={loginSubmit}>
        <div className='registroNombre'>
          <input id='nombreRegistro'
            type='text'
            placeholder='Nombre'
            name='nombre'
            value={nombre}
            onChange={onInputChange}
          />
        </div>
       {/*  <div className='registroApellidos'>
          <input
            type='text'
            className=''
            placeholder='Apellidos'
            name='apellidos'
            value={apellidos}
            onChange={onInputChange}
          />
        </div> */}
        <div className='registroCorreo'>
          <input id='nombreRegistro'
            type='text'
            className='inputContrasenaRegistro'
            placeholder='Correo'
            name='email'
            value={email}
            onChange={onInputChange}
          />
        </div>
        <div className='registroContrasena'>
          <input id='nombreRegistro'
            type='password'
            className='inputContrasenaRegistro'
            placeholder='Contraseña'
            name='password'
            value={password}
            onChange={onInputChange}
          />
        </div>
        <div className='registroContrasena'>
          <input id='nombreRegistro'
          className="inputContrasenaRegistro"
            type='password'
            
            placeholder='Repetir contraseña'
            //name='password'
            //value={password}
            //onChange={onInputChange}
          />
        </div>

         <div className='eresSocio'>
        <label for="eresSocio"> Soy socio</label>
        <div className='contenedorSwitch'> 
          <label class="switch"> 
          <input type="checkbox"/>
          <span class="slider round"></span></label>
        </div>
        </div> 
        <div className='eresSocio'>
        
        <Link to='/condiciones'> Aceptar términos legales</Link>
        <div className='contenedorSwitch'> 
          <label class="switch"> 
          <input type="checkbox"/>
          <span class="slider round"></span></label>
        </div>
      
        </div> 



       {/*  <div className='registroDireccion'>
          <input
            type='text'
            className=''
            placeholder='Dirección'
            name='direccion'
            value={direccion}
            onChange={onInputChange}
          />
        </div> */}
       {/*  <div className='registroTelefono'>
          <input
            type='text'
            className=''
            placeholder='Teléfono'
            name='telefono'
            value={telefono}
            onChange={onInputChange}
          />
        </div> */}

        
<div className='botonRegistrarse'>
        <button class="botonAmarillo">
        <p className='botonAcceder'>REGISTRARSE</p>  
        </button>
</div>


        
      </form>
      {mensaje}
    </div>
  );
};
