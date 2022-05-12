import React, { useEffect } from 'react';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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

  return (
    <Maps>
      <Header />
      {maps.map(({ uuid, splash, displayName }) => (
        <div key={uuid} className="Mapas">
          <img src={splash} alt="maps" width={480} height={500} />
          <Link to={`/maps/${uuid}`}>
            <p>{displayName}</p>
          </Link>
        </div>
      ))}
    </Maps>
  );
};

export default Mapas;
