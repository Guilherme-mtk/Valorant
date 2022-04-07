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
      {agents.map(({ uuid, fullPortraitV2, displayName, role }) => (
        <div className="Champions" key={uuid}>
          <img
            src={fullPortraitV2}
            alt="agents"
            id={uuid}
            width={500}
            height={500}
          />
          <p>{displayName}</p>
          <p>{role.displayName}</p>
        </div>
      ))}
      <Helmet>
        <title>{intl.formatMessage(messages.pageTitle)}</title>
      </Helmet>
    </Container>
  );
}

export default Agents;
