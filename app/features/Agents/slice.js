import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  fetchingAgents: false,
  data: [],
};

const agentsSlice = createSlice({
  name: 'agents',
  initialState,
  reducers: {
    getAgents(state) {
      state.fetchingAgents = true;
      state.loaded = false;
      state.errorAgents = null;
    },
    loadAgents(state, action) {
      state.fetchingAgents = false;
      state.loaded = true;
      state.data = action.payload.agents;
      state.errorAgents = null;
    },
    errorAgents(state, action) {
      state.fetchingAgents = false;
      state.errorAgents = action.payload.error;
    },
  },
});

export const { getAgents, loadAgents, errorAgents } = agentsSlice.actions;

export const { reducer } = agentsSlice;
