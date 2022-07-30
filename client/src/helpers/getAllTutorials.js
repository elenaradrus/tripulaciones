export const getAllTutorials = async () => {
  const miURL = `http://localhost:443/tutorials`;
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
