import getAll from '../services/blogs.js';
import { createSlice } from '@reduxjs/toolkit';

const blogSlice = createSlice({
  name: 'blogs',
  initialState: [],
  reducers: {
    setBlogs(state, action) {
      return action.payload;
    },
  },
});

export const getBlogs = () => {
  return async (dispatch) => {
    const blogs = await getAll();
    dispatch(setBlogs(blogs));
  };
};

export const { setBlogs } = blogSlice.actions;
export default blogSlice.reducer;
