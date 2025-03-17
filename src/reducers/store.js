import { configureStore } from '@reduxjs/toolkit';
import notificationReducer from './notificationReducer.js';
import blogReducer from './blogsReducer.js';

const store = configureStore({
  reducer: {
    notification: notificationReducer,
    blogs: blogReducer,
  },
});

export default store;
