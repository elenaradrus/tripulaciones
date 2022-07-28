import { useState, useEffect } from 'react';
import { getOneCategoria } from '../helpers';

export const useFetchOneCategoria = (id) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getOneCategoria(id).then((categorias) => {
      setState({
        data: categorias,
        loading: false,
      });
    });
  }, [id]);

  return state;
};
