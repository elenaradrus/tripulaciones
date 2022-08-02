import React from 'react'
import './RespuestasPage.css';


function RespuestasPage() {
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
        <button class="botonBlanco">
        <p className='botonAcceder'>CONTINUAR</p>  
        </button>
</div>
</div>




    </div>







  )
}

export default RespuestasPage