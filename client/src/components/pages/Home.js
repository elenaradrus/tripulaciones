import { useEffect, useState } from 'react';
import { useFetch } from '../../hooks';
import { TallerSection } from '../TallerSection';

export const Home = () => {
  const { data } = useFetch();

  return (
    <>
      <h1>Home Page</h1>
      {data.map((taller) => (
        <TallerSection key={taller._id} {...taller} />
      ))}
    </>
  );
};
