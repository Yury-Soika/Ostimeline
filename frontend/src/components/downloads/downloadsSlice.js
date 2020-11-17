import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { client } from '../api/client';
import regeneratorRuntime from "regenerator-runtime";
import { apiUrl } from './../config';

const downloadsAdapter = createEntityAdapter();

const initialState = downloadsAdapter.getInitialState({
  status: 'idle',
  error: null
});

export const fetchDownloads = createAsyncThunk('downloads/fetchDownloads', async () => {
  const response = await client.get(`${apiUrl}/downloads`);
  return response.downloads;
});

const downloadSlice = createSlice({
  name: 'download',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchDownloads.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchDownloads.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      downloadsAdapter.upsertMany(state, action.payload);
    },
    [fetchDownloads.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    }
  }
});

export default downloadSlice.reducer;

export const { selectAll: selectAllDownloads } = downloadsAdapter.getSelectors(state => state.download);