import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './authSlice';
import { pokemonSlice } from './pokemonSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    pokemon: pokemonSlice.reducer,
  },
});