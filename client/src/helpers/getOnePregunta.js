export const getOnePregunta = async (id) => {
  const miURL = `http://localhost:443/preguntas/${id}`;
  const resp = await fetch(miURL);
  const pregunta = await resp.json();

  return pregunta;
};
