export const getOneJuego = async (id) => {
  const miURL = `http://localhost:443/juegos/${id}`;
  const resp = await fetch(miURL);
  const juego = await resp.json();

  return juego;
};
