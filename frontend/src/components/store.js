import { configureStore } from '@reduxjs/toolkit';
import userReducer from './users/userSlice';
import postsReducer from './posts/postsSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer
  }
});