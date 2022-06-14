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
import Header from '../Components/Header';

function Agents() {
  const dispatch = useDispatch();
  const intl = useIntl();
  const agents = useSelector(selectAgents);
  useInjectReducer({ key: 'agents', reducer });
  useInjectSaga({ key: 'agents', saga });

  useEffect(() => {
    dispatch(getAgents());
  }, []);

  return (
    <Container>
      <Header />
      {agents.map(({ uuid, fullPortraitV2, displayName }) => (
        <div key={uuid} className="Champions">
          <img
            className="imgagents"
            src={fullPortraitV2}
            alt="agents"
            width={480}
            height={500}
          />
          <p>{displayName}</p>
        </div>
      ))}
      <Helmet>
        <title>{intl.formatMessage(messages.pageTitle)}</title>
      </Helmet>
    </Container>
  );
}

export default Agents;
