import { configureStore } from '@reduxjs/toolkit';
import userReducer from './forms/userSlice';
import postsReducer from './posts/postsSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer
  }
});