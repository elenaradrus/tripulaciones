import React from 'react'
import './RespuestasPage.css';
import { Navigate, useNavigate } from 'react-router-dom';


function RespuestasPage() {

  const navigate = useNavigate();

  const weeklyOnClick = () => {
    navigate('/progreso')
  }

  return (
    <div>
        <h2 className='aprendamosTitle'>Completado</h2>

        <button onClick={weeklyOnClick}>CONTINUAR</button>





    </div>







  )
}

export default RespuestasPage