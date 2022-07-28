import { useState, useEffect } from 'react';
import { getAllCategorias } from '../helpers';

export const useFetchCategoria = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getAllCategorias().then((categorias) => {
      setState({
        data: categorias,
        loading: false,
      });
    });
  }, []);

  return state;
};
