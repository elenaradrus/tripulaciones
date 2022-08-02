import { useState, useEffect } from 'react';
import { getAllTutorials } from '../helpers';

export const useFetchTutorial = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getAllTutorials().then((tutorials) => {
      setState({
        data: tutorials,
        loading: false,
      });
    });
  }, []);

  return state;
};
