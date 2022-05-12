import { createSelector } from '@reduxjs/toolkit';
import { initialState } from './slice';

const selectAgentsDetailsDomain = state => state.maps || initialState;

const selectAgentsDetails = createSelector(
  [selectAgentsDetailsDomain],
  agentsdetails => agentsdetails.data,
);

export default selectAgentsDetails;

export { selectAgentsDetails };
