import React from 'react'
import './RespuestasPage.css';
import {Navigate, useNavigate} from 'react-router-dom'


function RespuestasPage() {

  const navigate = useNavigate();

  const weeklyOnClick = () => {
    navigate('/progreso')
  }



  return (
    <div className='contenedorTodo' >
        <h2 className='aprendamosTitle'>Completado</h2>

        <img src='/images/5de6.PNG' alt='5de6' className='imagen5de6' />

        <p className='textoSuperado'>
        ¡Test superado!
        </p>

        <div className='botonYellow'>
        <button class="botonAmarillo">
        <p className='botonAcceder'>VER RESPUESTAS</p>  
        </button>

        <div className='botonWhite'>
        <button class="botonBlanco" onClick={weeklyOnClick}>
    
        <p className='botonAcceder'>CONTINUAR</p>  
        </button>
</div>
</div>




    </div>







  )
}

export default RespuestasPage