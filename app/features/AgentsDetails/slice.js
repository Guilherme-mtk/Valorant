import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  fetchingDetails: false,
  data: [],
};

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    getDetails(state) {
      state.fetchingDetails = true;
      state.loaded = false;
      state.errorDetails = null;
    },
    loadDetails(state, action) {
      state.fetchingDetails = false;
      state.loaded = true;
      state.data = action.payload.agents;
      state.errorDetails = null;
    },
    errorDetails(state, action) {
      state.fetchingDetails = false;
      state.errorDetails = action.payload.error;
    },
  },
});

export const { getDetails, loadDetails, errorDetails } = detailsSlice.actions;

export const { reducer } = detailsSlice;
