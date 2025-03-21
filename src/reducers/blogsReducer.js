import service from '../services/blogs.js';
import { createSlice } from '@reduxjs/toolkit';

const blogSlice = createSlice({
  name: 'blogs',
  initialState: [],
  reducers: {
    setBlogs(state, action) {
      return action.payload;
    },

    addBlog(state, action) {
      state.push(action.payload);
    },
  },
});

export const getBlogs = () => {
  return async (dispatch) => {
    const blogs = await service.getAll();
    dispatch(setBlogs(blogs));
  };
};

export const postBlog = (blog) => {
  return async (dispatch) => {
    try {
      const blogPosted = await service.postABlog(blog);
      dispatch(addBlog(blogPosted));
    } catch (error) {
      console.log(error);
    }
  };
};

export const { setBlogs, addBlog } = blogSlice.actions;
export default blogSlice.reducer;
