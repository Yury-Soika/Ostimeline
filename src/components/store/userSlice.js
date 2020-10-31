import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import regeneratorRuntime from "regenerator-runtime";
import { client } from './../api/client';

const apiUrl = 'http://localhost:4000';

const initialState = {
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null,
  status: 'idle',
  error: null
};

export const login = createAsyncThunk('users/authenticate', async ({username, password}) => {
  const response = await client.post(`${apiUrl}/users/authenticate`, {username, password});
  localStorage.setItem('user', JSON.stringify(response));
  return response;
});

export const logout = createAsyncThunk('', () => {
  localStorage.removeItem('user');
  return null;
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [login.pending]: (state, action) => {
      state.status = 'loading';
    },

    [login.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.user = action.payload;
    },

    [login.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },

    [logout.fulfilled]: (state, action) => {
      state.status = 'idle';
      state.user = null;
    }
  }
});

export default userSlice.reducer;

export const selectUser = state => state.user;