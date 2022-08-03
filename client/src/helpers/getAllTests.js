export const getAllTests = async () => {
  const miURL = `${process.env.REACT_APP_URI_BASE}/tests`;
  const resp = await fetch(miURL);
  const data = await resp.json();
  const tests = data.map((test) => ({
    _id: test._id,
    imagen: test.imagen,
    nombre: test.nombre,
    descripcion: test.descripcion,
    nivel: test.nivel,
    valoracion: test.valoracion,
    user_name: test.user_id.nombre,
    categoria: test.categoria.titulo,
    pregunta: test.pregunta,
  }));
  return tests;
};
