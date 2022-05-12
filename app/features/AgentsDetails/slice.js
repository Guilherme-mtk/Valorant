import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  fetchingAgentsDetails: false,
  data: [],
};

const agentsdetailsSlice = createSlice({
  name: 'agentsdetails',
  initialState,
  reducers: {
    getAgentsDetails(state) {
      state.fetchingAgentsDetails = true;
      state.loaded = false;
      state.errorAgentsDetails = null;
    },
    loadAgentsDetails(state, action) {
      state.fetchingAgentsDetails = false;
      state.loaded = true;
      state.data = action.payload.agentsdetails;
      state.errorAgentsDetails = null;
    },
    errorAgentsDetails(state, action) {
      state.fetchingAgentsDetails = false;
      state.errorAgentsDetails = action.payload.error;
    },
  },
});

export const {
  getAgentsDetails,
  loadAgentsDetails,
  errorAgentsDetails,
} = agentsdetailsSlice.actions;

export const { reducer } = agentsdetailsSlice;
