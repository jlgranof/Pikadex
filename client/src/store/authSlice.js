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

// Restore Thunk
export const restoreUser = createAsyncThunk(
  'auth/restoreUser',
  async() => {
    const response = await csrfFetch('/authentication/session');
    const data = await response.json();
    // console.log(response)
    return data.user;
  }
)

export const signUp = createAsyncThunk(
  'auth/signupUser',
  async({ username, email, password, avatarUrl }, thunkAPI) => {
    const response = await csrfFetch('/authentication/signup', {
      method: 'POST',
      body: JSON.stringify({
        username, email, password, avatarUrl
      })
    });
    const data = await response.json();
    return data.user;
  }
)

export const logout = createAsyncThunk(
  'auth/logoutUser',
  async() => {
    const response = await csrfFetch('/authentication/logout', {
      method: 'DELETE'
    });
    return response;
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
    builder.addCase(restoreUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.user = {};
    })
  }
});