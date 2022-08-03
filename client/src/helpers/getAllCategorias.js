export const getAllCategorias = async () => {
  const miURL = `${process.env.REACT_APP_URI_BASE}/categorias`;
  const resp = await fetch(miURL);
  const data = await resp.json();
  const categorias = data.map((categoria) => ({
    _id: categoria._id,
    titulo: categoria.titulo,
    imagen: categoria.imagen,
    icono: categoria.icono,
  }));
  return categorias;
};
