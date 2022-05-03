import React, { useEffect } from 'react';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { useDispatch, useSelector } from 'react-redux';
import { getMaps, reducer } from './slice';
import saga from './saga';
import selectMaps from './selectors';
import Header from '../Components/Header';
import { Maps } from './styles';

const Mapas = () => {
  const dispatch = useDispatch();
  const maps = useSelector(selectMaps);
  useInjectReducer({ key: 'maps', reducer });
  useInjectSaga({ key: 'maps', saga });

  useEffect(() => {
    dispatch(getMaps());
  }, []);

  console.log('aconteceu', maps);

  return (
    <Maps>
      <Header />
      {maps.map(({ uuid, splash, displayName }) => (
        <div key={uuid} className="Mapas">
          <img src={splash} alt="maps" width={480} height={500} />
          <p>{displayName}</p>
        </div>
      ))}
    </Maps>
  );
};

export default Mapas;
