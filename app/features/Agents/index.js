import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { useDispatch, useSelector } from 'react-redux';
import { useIntl } from 'react-intl';
import { getAgents, reducer } from './slice';
import saga from './saga';
import messages from './messages';
import selectAgents from './selectors';
import { Container } from './styles';
import logo from './assets/logo.jpg';

function Agents() {
  const dispatch = useDispatch();
  const intl = useIntl();
  const agents = useSelector(selectAgents);

  console.log(agents);

  useInjectReducer({ key: 'agents', reducer });
  useInjectSaga({ key: 'agents', saga });

  useEffect(() => {
    dispatch(getAgents());
  }, []);

  return (
    <Container>
      <div className="menu">
        <ul>
          <img src={logo} alt="logo" width={70} height={65} />
          <li>
            <a href="#1">Agents</a>
          </li>
          <li>
            <a href="#2">Maps</a>
          </li>
          <li>
            <a href="#3">Arms</a>
          </li>
        </ul>
      </div>
      {agents.map(({ uuid, fullPortraitV2, displayName }) => (
        <div className="Champions" key={uuid}>
          <img
            src={fullPortraitV2}
            alt="agents"
            id={uuid}
            width={480}
            height={500}
          />
          <p>
            <a href="#4">{displayName}</a>
          </p>
        </div>
      ))}
      <Helmet>
        <title>{intl.formatMessage(messages.pageTitle)}</title>
      </Helmet>
    </Container>
  );
}

export default Agents;
