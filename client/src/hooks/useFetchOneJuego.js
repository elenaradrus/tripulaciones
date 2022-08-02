import { useState, useEffect } from 'react';
import { getOneJuego } from '../helpers';

export const useFetchOneJuego = (id) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getOneJuego(id).then((juego) => {
      setState({
        data: juego,
        loading: false,
      });
    });
  }, [id]);

  return state;
};
