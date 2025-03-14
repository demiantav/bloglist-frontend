import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import style from '../components/Notification.module.css';

const Notification = ({ statusNotification }) => {
  const messageState = useSelector((state) => state.notification);

  if (messageState === null) {
    return null;
  }

  // const isError = message.includes('wrong');

  return (
    <div
      className={`${style.notification} ${
        statusNotification === 'error' ? style.error : style.success
      }`}
    >
      {messageState}
    </div>
  );
};

export default Notification;
