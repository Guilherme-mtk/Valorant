import { createSelector } from '@reduxjs/toolkit';
import { initialState } from './slice';

const selectWeaponsDomain = state => state.weapons || initialState;

const selectWeapons = createSelector(
  [selectWeaponsDomain],
  weapons => weapons.data,
);

export default selectWeapons;

export { selectWeapons };
