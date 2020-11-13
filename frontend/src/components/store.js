import { configureStore } from '@reduxjs/toolkit';
import userReducer from './users/userSlice';
import postsReducer from './posts/postsSlice';
import pageReducer from './pages/pageSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
    page: pageReducer
  }
});