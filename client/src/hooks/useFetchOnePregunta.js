import { useState, useEffect } from 'react';
import { getOnePregunta } from '../helpers';

export const useFetchOnePregunta = (id) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getOnePregunta(id).then((pregunta) => {
      setState({
        data: pregunta,
        loading: false,
      });
    });
  }, [id]);

  return state;
};
