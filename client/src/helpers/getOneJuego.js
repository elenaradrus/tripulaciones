export const getOneJuego = async (id) => {
  const miURL = `${process.env.REACT_APP_URI_BASE}/juegos/${id}`;
  const resp = await fetch(miURL);
  const juego = await resp.json();

  return juego;
};
