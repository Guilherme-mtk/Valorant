import React, { useEffect } from 'react';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getWeapons, reducer } from './slice';
import saga from './saga';
import selectWeapons from './selectors';
import Header from '../Components/Header';
import { Weapons } from './styles';

const Armas = () => {
  const dispatch = useDispatch();
  const weapons = useSelector(selectWeapons);
  useInjectReducer({ key: 'weapons', reducer });
  useInjectSaga({ key: 'weapons', saga });

  useEffect(() => {
    dispatch(getWeapons());
  }, []);

  return (
    <Weapons>
      <Header />
      {weapons.map(({ uuid, displayName }) => (
        <div key={uuid} className="Weapons">
          <Link to={`/weapons/${uuid}`}>
            <p>{displayName}</p>
          </Link>
        </div>
      ))}
    </Weapons>
  );
};

export default Armas;
