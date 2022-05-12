import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  fetchingWeapons: false,
  data: [],
};

const weaponsSlice = createSlice({
  name: 'weapons',
  initialState,
  reducers: {
    getWeapons(state) {
      state.fetchingWeapons = true;
      state.loaded = false;
      state.errorWeapons = null;
    },
    loadWeapons(state, action) {
      state.fetchingWeapons = false;
      state.loaded = true;
      state.data = action.payload.weapons;
      state.errorWeapons = null;
    },
    errorWeapons(state, action) {
      state.fetchingWeapons = false;
      state.errorWeapons = action.payload.error;
    },
  },
});

export const { getWeapons, loadWeapons, errorWeapons } = weaponsSlice.actions;

export const { reducer } = weaponsSlice;
