import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { client } from '../api/client';
import regeneratorRuntime from "regenerator-runtime";
import { apiUrl } from './../config';

const pageAdapter = createEntityAdapter();

const initialState = pageAdapter.getInitialState({
  status: 'idle',
  error: null
});

export const fetchPage = createAsyncThunk('page/fetchPage', async pageName => {
  const response = await client.get(`${apiUrl}/page/${pageName}`);
  return response.page;
});

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPage.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchPage.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      pageAdapter.upsertMany(state, action.payload);
    },
    [fetchPage.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    }
  }
});

export default pageSlice.reducer;

export const selectPage = state => state.page.entities;
export const {
  selectById: selectPageById,
  selectIds: selectPageIds
} = pageAdapter.getSelectors(state => state.page);