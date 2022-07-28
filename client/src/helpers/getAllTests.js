export const getAllTests = async () => {
  const miURL = `http://localhost:443/tests`;
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
  }));
  return tests;
};
