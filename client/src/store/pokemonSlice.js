import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { csrfFetch } from '../utils/csrf';

export const getAllPokemon = createAsyncThunk(
  'pokemon/getAll',
  async() => {
    const response = await csrfFetch('/api/pokemon');
    const data = await response.json();
    return data;
  }
);

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: { pokemon: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPokemon.fulfilled, (state, action) => {
      state.pokemon = action.payload.pokemon;
    })
  }
})

