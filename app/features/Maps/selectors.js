import { createSelector } from '@reduxjs/toolkit';
import { initialState } from './slice';

const selectMapsDomain = state => state.maps || initialState;

const selectMaps = createSelector([selectMapsDomain], maps => maps.data);

export default selectMaps;

export { selectMaps };
