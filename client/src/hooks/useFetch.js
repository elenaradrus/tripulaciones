import { useState, useEffect } from 'react';
import { getAllTallers } from '../helpers';

export const useFetch = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getAllTallers().then((tallers) => {
      setState({
        data: tallers,
        loading: false,
      });
    });
  }, []);

  return state;
};
