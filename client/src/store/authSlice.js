import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { csrfFetch } from '../uitls/csrf';

// Login Thunk
export const login = createAsyncThunk(
  'auth/loginUser',
  async({ username, password }, thunkAPI) => {
    const response = await csrfFetch('/authentication/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      }),
    });
    const data = await response.json();
    return data.user;
  }
)


// Creating Auth Clice and handling the actions
export const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null },
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  }
});