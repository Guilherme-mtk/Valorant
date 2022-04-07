import { createSelector } from '@reduxjs/toolkit';
import { initialState } from './slice';

const selectAgentsDomain = state => state.agents || initialState;

const selectAgents = createSelector(
  [selectAgentsDomain],
  agents => agents.data,
);

// const selectNameAgents = createSelector([selectAgentsDomain], agents =>
//   agents.data.map(name => {
//     // name.uuid;
//     return { name: name.displayName, id: name.uuid };
//   }),
// );

export default selectAgents;

export { selectAgents };
