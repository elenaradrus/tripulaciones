import './Progreso.css'

export const Progreso = () => {

    return (
        <div className='containerProgreso'>
            <div className='weekCompleted'>
                <div>
                    <img className='imagenSemana' src='/images/semana.png' alt="semana" />
                </div>
            </div>
            <div className='textDiaConsecutivo'>
                <h3>¡6to día <br />consecutivo!</h3>
            </div>

            <div className='containerimagenSemana'>
                <img className='imagenSilueta' src='/images/completadoSemana.png' alt="semana" />
            </div>

            <h3 className='desbloqueado'>Has desbloqueado el Nivel 2 <br />en Navega Seguro</h3>

            <div className='containerBtn'>
                <button className='btnProgreso'>Sigue <br/>Aprendiendo</button>
            </div>



        </div>
    );
}

