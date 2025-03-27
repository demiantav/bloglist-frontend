import { createSlice } from '@reduxjs/toolkit';
import loginService from '../services/login.js';

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser(state, action) {
      return action.payload;
    },
  },
});

export const loginUser = (credentials) => {
  return async (dispatch) => {
    try {
      const user = await loginService.login(credentials);
      window.localStorage.setItem('userTokenLocal', JSON.stringify(user));
      dispatch(setUser(user));
    } catch (error) {
      console.log(error);
    }
  };
};

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
