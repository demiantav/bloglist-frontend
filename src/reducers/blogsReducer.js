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

    deleteBlog(state, action) {
      return state.filter((blog) => blog.id !== action.payload);
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

export const deleteABlog = (id) => {
  return async (dispatch) => {
    try {
      await service.deleteBlog(id);
      dispatch(deleteBlog(id));
    } catch (error) {
      console.log(error);
    }
  };
};

export const { setBlogs, addBlog, deleteBlog } = blogSlice.actions;
export default blogSlice.reducer;
