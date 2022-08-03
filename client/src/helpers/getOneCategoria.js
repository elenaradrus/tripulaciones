export const getOneCategoria = async (id) => {
  const miURL = `${process.env.REACT_APP_URI_BASE}/categorias/${id}`;
  const resp = await fetch(miURL);
  const categoria = await resp.json();

  return categoria;
};
