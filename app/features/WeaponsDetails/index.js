import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';

const Details = () => {
  const { uuid } = useParams();
  return (
    <div>
      <Header />
      <h1>ID: {uuid}</h1>
    </div>
  );
};

export default Details;
