import { useState, useEffect } from 'react';
import { getAllProvincias } from '../helpers';

export const useFetchProvincias = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getAllProvincias().then((provincias) => {
      setState({
        data: provincias,
        loading: false,
      });
    });
  }, []);

  return state;
};
