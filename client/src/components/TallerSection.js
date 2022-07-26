import { Button } from './Button';
import './TallerSection.css';
export const TallerSection = ({
  _id,
  nombre,
  tematica,
  imparte,
  fecha,
  aforo,
  participantes,
  ubicacion,
  media,
}) => {
  const inscription = async () => {
    const tokenLS = localStorage.getItem('token');
    if (!tokenLS) {
      return;
    }
    let token = tokenLS.substring(1, tokenLS.length - 1);
    let nuevopart = participantes.concat('Anibal');
    let data = { participantes: nuevopart };

    await fetch(`http://localhost:5000/tallers/inscription/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((res) => {
        //   if (res.msg === undefined) {
        //     navigate(-1);
        //   } else {
        //     setMensaje(res.msg);
        //   }
        //   navigate('/login');
        //   // console.log(res);
      })
      .catch((error) => console.log(error.errors));
  };

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col_imagen'>{media}</div>
          <div className='col_datos'>
            {nombre}|{tematica}|{imparte}|{fecha}|{aforo}|{participantes}|
            {ubicacion}
            <Button
              buttonStyle='btn-outline'
              buttonColor='green'
              onClick={inscription}
            >
              Inscribirse
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
