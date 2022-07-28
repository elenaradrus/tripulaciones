import { useState, useEffect } from 'react';
import { getOneTest } from '../helpers';

export const useFetchOneTest = (id) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getOneTest(id).then((test) => {
      setState({
        data: test,
        loading: false,
      });
    });
  }, [id]);

  return state;
};
