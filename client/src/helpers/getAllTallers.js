export const getAllTallers = async () => {
  const miURL = `http://localhost:5000/tallers`;
  const resp = await fetch(miURL);
  const data = await resp.json();
  const tallers = data.map((taller) => ({
    _id: taller._id,
    nombre: taller.nombre,
    tematica: taller.tematica,
    imparte: taller.imparte,
    fecha: taller.fecha,
    aforo: taller.aforo,
    participantes: taller.participantes,
    ubicacion: taller.ubicacion,
    media: taller.media,
  }));
  return tallers;
};
