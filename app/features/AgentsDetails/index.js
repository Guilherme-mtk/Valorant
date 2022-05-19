import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { useParams } from 'react-router-dom';
import { getAgentsDetails, reducer } from './slice';
import saga from './saga';
import selectAgentsDetails from './selectors';
import Header from '../Components/Header';
import { Details } from './style';

const Agentes = () => {
  const { uuid } = useParams();
  const dispatch = useDispatch();
  const agentsdetails = useSelector(selectAgentsDetails);
  useInjectReducer({ key: 'agentsdetails', reducer });
  useInjectSaga({ key: 'agentsdetails', saga });

  useEffect(() => {
    dispatch(getAgentsDetails());
  }, []);

  return (
    <Details>
      <Header />
      {agentsdetails.map(({ displayName }) => (
        <div key={uuid} className="Details">
          <h1>{displayName}</h1>
        </div>
      ))}
      <h1>agentsDetails {uuid}</h1>
    </Details>
  );
};

export default Agentes;
