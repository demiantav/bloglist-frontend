import { configureStore } from '@reduxjs/toolkit';
import notificationReducer from './notificationReducer.js';

const store = configureStore({
  reducer: {
    notification: notificationReducer,
  },
});

export default store;
