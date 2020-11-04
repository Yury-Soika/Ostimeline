import { createSlice, nanoid, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { client } from '../api/client';

const apiUrl = 'http://localhost:4000';

const postsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.createdDate.localeCompare(a.createdDate)
})

const initialState = postsAdapter.getInitialState({
  status: 'idle',
  error: null
})

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await client.get(`${apiUrl}/posts`);
  return response.posts;
});

export const addNewPost = createAsyncThunk('posts/addNewPost', async initialPost => {
  const response = await client.post(`${apiUrl}/posts`, initialPost);
  return response.post;
});

export const updatePost = createAsyncThunk('posts/updatePost', async initialPost => {
  const response = await client.put(`${apiUrl}/posts/${initialPost.id}`, initialPost.change);
  return response.post;
});

export const deletePost = createAsyncThunk('posts/deletePost', async id => {
  const response = await client.delete(`${apiUrl}/posts/${id}`);
  return response;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      postsAdapter.upsertMany(state, action.payload);
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [addNewPost.fulfilled]: postsAdapter.addOne,
    [updatePost.fulfilled]: postsAdapter.upsertOne,

    [deletePost.fulfilled]: (state, action) => {
      postsAdapter.removeOne(state, action.meta.arg);
    }
  }
});

export default postsSlice.reducer;

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds
} = postsAdapter.getSelectors(state => state.posts);
