import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import regeneratorRuntime from "regenerator-runtime";
import { client } from '../api/client';
import { apiUrl } from './../config';

const usersAdapter = createEntityAdapter();

const initialState = usersAdapter.getInitialState({
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null,
  status: 'idle',
  error: null
});

export const login = createAsyncThunk('users/authenticate', async ({username, password}) => {
  const response = await client.post(`${apiUrl}/users/authenticate`, {username, password});
  localStorage.setItem('user', JSON.stringify(response));
  return response;
});

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await client.get(`${apiUrl}/users`);
  return response;
});

export const registrationUser = createAsyncThunk('users/registrationUser', async (values) => {
  const response = await client.post(`${apiUrl}/users/register`, values);
  return response;
});

export const updateUser = createAsyncThunk('users/updateUser', async user => {
  const response = await client.put(`${apiUrl}/users/${user.id}`, user.change);
  return response;
});

export const deleteUser = createAsyncThunk('users/deleteUser', async id => {
  const response = await client.delete(`${apiUrl}/users/${id}`);
  return response;
});

const userSlice = createSlice({
  name: 'user',
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
    [fetchUsers.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      usersAdapter.upsertMany(state, action.payload);
    },
    [fetchUsers.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [registrationUser.fulfilled]: usersAdapter.addOne,
    [updateUser.fulfilled]: usersAdapter.upsertOne,
    [deleteUser.fulfilled]: (state, action) => {
      usersAdapter.removeOne(state, action.meta.arg);
    }
  }
});

export default userSlice.reducer;

export const selectUser = state => state.user.user;
export const { logout } = userSlice.actions;
export const { reset } = userSlice.actions;
export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUserIds
} = usersAdapter.getSelectors(state => state.user);
