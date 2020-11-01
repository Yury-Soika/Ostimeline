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


export const registration = createAsyncThunk('users/register', async (values) => {
  const response = await client.post(`${apiUrl}/users/register`, values);
  return response;
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    reset(state) {
      state.status = 'idle';
      state.error = null;
    },

    logout(state) {
      localStorage.removeItem('user');
      state.user = null;
      state.status = 'idle';
      state.error = null;
    }
  },
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

    [registration.pending]: (state, action) => {
      state.status = 'loading';
    },

    [registration.fulfilled]: (state, action) => {
      state.status = 'succeeded';
    },

    [registration.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  }
});

export default userSlice.reducer;

export const selectUser = state => state.user;
export const { logout } = userSlice.actions;
export const { reset } = userSlice.actions;