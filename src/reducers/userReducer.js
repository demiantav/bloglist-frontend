import { createSlice } from '@reduxjs/toolkit';
import loginService from '../services/login.js';
import blogService from '../services/blogs.js';
import { setNotification } from './notificationReducer.js';

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser(state, action) {
      return action.payload;
    },

    resetUser() {
      return null;
    },
  },
});

export const loginUser = (credentials) => {
  return async (dispatch) => {
    try {
      const user = await loginService.login(credentials);
      window.localStorage.setItem('userTokenLocal', JSON.stringify(user));
      blogService.getToken(user.token);

      dispatch(setUser(user));
      dispatch(setNotification(`User ${user.name} logged in successfully`, 'success'));
    } catch (error) {
      dispatch(setNotification(`Error: ${error.response.data.error}`, 'error'));
    }
  };
};

export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
