import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import style from '../components/Notification.module.css';

const Notification = () => {
  const { message, status } = useSelector((state) => state.notification);

  if (message === '') {
    return null;
  }

  return (
    <div className={`${style.notification} ${status === 'error' ? style.error : style.success}`}>
      {message}
    </div>
  );
};

export default Notification;
