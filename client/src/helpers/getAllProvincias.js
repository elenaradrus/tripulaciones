export const getAllProvincias = async () => {
  const miURL = `${process.env.REACT_APP_URI_BASE}/provincias`;
  const resp = await fetch(miURL);
  const data = await resp.json();
  const provincias = data.map((provincia) => ({
    _id: provincia._id,
    descripcion: provincia.descripcion,
  }));
  return provincias;
};
