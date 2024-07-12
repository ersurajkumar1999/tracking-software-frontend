import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import timeLogReducer from '../features/timeLogSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    timeLog: timeLogReducer,
  },
});

export default store;