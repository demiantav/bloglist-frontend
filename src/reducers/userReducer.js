import { createSlice } from '@reduxjs/toolkit';
import loginService from '../services/login.js';
import blogService from '../services/blogs.js';

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
    } catch (error) {
      console.log(error);
    }
  };
};

export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
