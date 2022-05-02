import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';

const agentsDetails = () => {
  const { uuid } = useParams;

  return (
    <div>
      <Header />
      <h1>agentsDetails {uuid}</h1>
    </div>
  );
};

export default agentsDetails;
