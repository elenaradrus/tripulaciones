import { useState, useEffect } from 'react';
import { getAllPreguntas } from '../helpers';

export const useFetchPregunta = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getAllPreguntas().then((preguntas) => {
      setState({
        data: preguntas,
        loading: false,
      });
    });
  }, []);

  return state;
};
