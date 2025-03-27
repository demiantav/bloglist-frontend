import { configureStore } from '@reduxjs/toolkit';
import notificationReducer from './notificationReducer.js';
import blogReducer from './blogsReducer.js';
import userReducer from './userReducer.js';

const store = configureStore({
  reducer: {
    notification: notificationReducer,
    blogs: blogReducer,
    user: userReducer,
  },
});

export default store;
