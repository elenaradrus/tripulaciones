export const getOneCategoria = async (id) => {
  const miURL = `http://localhost:443/categorias/${id}`;
  const resp = await fetch(miURL);
  const categoria = await resp.json();

  return categoria;
};
