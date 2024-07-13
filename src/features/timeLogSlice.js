import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lastLog: null,
  lastLogActive: false
};

const timeLogSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentLog: (state, action) => {
      state.lastLog = action.payload;
      state.lastLogActive = (action.payload) ? true : false;
    },
    clearCurrentLog: () => {
      state.lastLog = null;
      state.lastLogActive = false;
    },
  },
});

export const { setCurrentLog, clearCurrentLog } = timeLogSlice.actions;

export default timeLogSlice.reducer;
