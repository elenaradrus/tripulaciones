export const getAllPreguntas = async () => {
  const miURL = `${process.env.REACT_APP_URI_BASE}/preguntas`;
  const resp = await fetch(miURL);
  const data = await resp.json();
  const preguntas = data.map((pregunta) => ({
    _id: pregunta._id,
    imagen: pregunta.imagen,
    texto: pregunta.texto,
    opcion1: pregunta.opcion1,
    opcion2: pregunta.opcion2,
    opcion3: pregunta.opcion3,
    opcion4: pregunta.opcion4,
    respuesta: pregunta.respuesta,
  }));
  return preguntas;
};
