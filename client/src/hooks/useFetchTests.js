import { useState, useEffect } from 'react';
import { getAllTests } from '../helpers';

export const useFetchTests = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getAllTests().then((tests) => {
      setState({
        data: tests,
        loading: false,
      });
    });
  }, []);

  return state;
};
