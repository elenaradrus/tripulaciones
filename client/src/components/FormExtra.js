import { useContext } from 'react';
import { useState } from 'react';
import Select from 'react-select';
import { UserContext } from '../context/UserContext';
import { useFetchProvincias } from '../hooks';
import { Button } from './Button';
export const FormExtra = () => {
  const { user } = useContext(UserContext);
  const [provincia, setProvincia] = useState(null);
  const [socio, setSocio] = useState(null);
  const [futurosocio, setFuturosocio] = useState(null);
  const [cuota, setCuota] = useState(null);
  const [nivelDig, setNivelDig] = useState(null);
  const [nivelEdu, setNivelEdu] = useState(null);
  const [edad, setEdad] = useState(null);

  const { data } = useFetchProvincias();
  const datos = data.map((provincia) => {
    return {
      value: provincia.descripcion,
      label: provincia.descripcion,
    };
  });

  const handleChangeProvincia = ({ value }) => {
    setProvincia(value);
  };
  const handleChangeSocio = ({ value }) => {
    setSocio(value);
  };
  const handleChangeFuturoSocio = ({ value }) => {
    setFuturosocio(value);
  };
  const handleChangeCuota = ({ value }) => {
    setCuota(value);
  };
  const handleChangeNivelDig = ({ value }) => {
    setNivelDig(value);
  };
  const handleChangeNivelEdu = ({ value }) => {
    setNivelEdu(value);
  };
  const handleChangeEdad = ({ value }) => {
    setEdad(value);
  };

  const afiliacion = [
    { value: 'Socio', label: 'Socio' },
    { value: 'No socio', label: 'No socio' },
  ];
  const edades = [
    { value: 60, label: '60-65' },
    { value: 65, label: '65-70' },
    { value: 70, label: '70-75' },
    { value: 75, label: '75-80' },
    { value: 80, label: 'más de 80' },
  ];
  const captacion = [
    { value: 'Si', label: 'Si' },
    { value: 'No', label: 'No' },
  ];
  const cuotas = [
    { value: 'Si', label: 'Si' },
    { value: 'No', label: 'No' },
  ];
  const niveldigita = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
  ];
  const niveleduca = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
  ];
  const loginSubmit = async (e) => {
    e.preventDefault();
    console.log(provincia);
    console.log(user);
    try {
      let data = {
        edad,
        provincia,
        socio,
        futurosocio,
        cuota,
        nivelDig,
        nivelEdu,
      };

      await fetch(`http://localhost:443/users/${user._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className='container' onSubmit={loginSubmit}>
      <label>Edad</label>
      <Select
        defaultValue={edad}
        onChange={handleChangeEdad}
        options={edades}
      />
      <label>Provincia</label>
      <Select
        defaultValue={provincia}
        onChange={handleChangeProvincia}
        options={datos}
      />
      <label>Socio</label>
      <Select
        defaultValue={socio}
        onChange={handleChangeSocio}
        options={afiliacion}
      />
      <label>Te gustaría hacerte socio</label>
      <Select
        defaultValue={futurosocio}
        onChange={handleChangeFuturoSocio}
        options={captacion}
      />
      <label>Prefieres la cuota Anual o Semestral</label>
      <Select
        defaultValue={cuota}
        onChange={handleChangeCuota}
        options={cuotas}
      />
      <label>Nivel de digitalización</label>
      <Select
        defaultValue={nivelDig}
        onChange={handleChangeNivelDig}
        options={niveldigita}
      />
      <label>Nivel de educación</label>
      <Select
        defaultValue={nivelEdu}
        onChange={handleChangeNivelEdu}
        options={niveleduca}
      />

      <Button
        type='submit'
        buttonColor='green'
        buttonSize='btn--mobile'
        buttonStyle='btn--primary'
      >
        Guardar
      </Button>
    </form>
  );
};
