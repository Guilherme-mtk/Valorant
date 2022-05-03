import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  fetchingAgents: false,
  data: [],
};

const mapsSlice = createSlice({
  name: 'maps',
  initialState,
  reducers: {
    getMaps(state) {
      state.fetchingMaps = true;
      state.loaded = false;
      state.errorMaps = null;
    },
    loadMaps(state, action) {
      state.fetchingMaps = false;
      state.loaded = true;
      state.data = action.payload.maps;
      state.errorMaps = null;
    },
    errorMaps(state, action) {
      state.fetchingMaps = false;
      state.errorMaps = action.payload.error;
    },
  },
});

export const { getMaps, loadMaps, errorMaps } = mapsSlice.actions;

export const { reducer } = mapsSlice;
