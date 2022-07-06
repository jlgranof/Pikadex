import { configureStore } from '@reduxjs/toolkit';

import couterReducer from './authSlice';

export const store = configureStore({
  reducer: {
    counter: couterReducer,
  },
});