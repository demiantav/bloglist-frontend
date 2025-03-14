import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    message: '',
    status: '',
  },
  reducers: {
    showNotification(state, action) {
      return {
        message: action.payload.message,
        status: action.payload.status,
      };
    },

    hideNotification(state, action) {
      return {
        message: '',
        status: '',
      };
    },
  },
});

export const setNotification = (message, status) => {
  return async (dispatch) => {
    dispatch(showNotification({ message, status }));

    setTimeout(() => {
      dispatch(hideNotification());
    }, 10000);
  };
};

export const { showNotification, hideNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
