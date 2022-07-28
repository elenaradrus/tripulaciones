export const getAllCategorias = async () => {
  const miURL = `http://localhost:443/categorias`;
  const resp = await fetch(miURL);
  const data = await resp.json();
  const categorias = data.map((categoria) => ({
    _id: categoria._id,
    titulo: categoria.titulo,
    imagen: categoria.imagen,
  }));
  return categorias;
};
