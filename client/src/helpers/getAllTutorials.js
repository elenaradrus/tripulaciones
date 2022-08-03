export const getAllTutorials = async () => {
  const miURL = `${process.env.REACT_APP_URI_BASE}/tutorials`;
  const resp = await fetch(miURL);
  const data = await resp.json();
  const tutorials = data.map((tutorial) => ({
    _id: tutorial._id,
    titulo: tutorial.titulo,
    subtitulo: tutorial.subtitulo,
    media: tutorial.media,
  }));
  return tutorials;
};
