import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import regeneratorRuntime from "regenerator-runtime";
import { client } from './../api/client';

const apiUrl = 'http://localhost:4000';

const initialUser = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null;

export const authenticate = createAsyncThunk('users/authenticate', async ({username, password}) => {
  const response = await client.post(`${apiUrl}/users/authenticate`, {username, password});
  return response;
})

const userSlice = createSlice({
  name: 'users',
  initialState: {
    user: null
  },
  reducers: {},
  extraReducers: {
    [authenticate.fulfilled]: (state, action) => {
      state.user = action.payload;
    }
  }
});

export default userSlice.reducer;

export const selectUser = state => state.user;