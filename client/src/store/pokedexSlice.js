import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { csrfFetch } from '../utils/csrf';

// Get all Pokedexes
export const getAllPokedexes = createAsyncThunk(
  'pokedex/getAll',
  async() => {
    const response = await csrfFetch('/api/pokedex');
    const data = await response.json();
    return data.pokedexes;
  }
)

// Get all User Pokedexes
export const getAllUserPokedexes = createAsyncThunk(
  'pokedex/getAllUsers',
  async({ id }, thunkAPI) => {
    const response = await csrfFetch(`/api/pokedex/user/${id}`);
    const data = await response.json();
    return data.pokedexes;
  }
)

export const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState: { pokedex: {
    all: null,
    user: null
  } },
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getAllPokedexes.fulfilled, (state, action) => {
      state.pokedex.all = action.payload;
    });
    builder.addCase(getAllUserPokedexes.fulfilled, (state, action) => {
      state.pokedex.user = action.payload;
    });
  }
});