export const getOnePregunta = async (id) => {
  const miURL = `${process.env.REACT_APP_URI_BASE}/preguntas/${id}`;
  const resp = await fetch(miURL);
  const pregunta = await resp.json();

  return pregunta;
};
