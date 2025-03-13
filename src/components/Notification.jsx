import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import style from '../components/Notification.module.css';

const Notification = () => {
  const messageState = useSelector((state) => state.notification);

  // useEffect(() => {
  //   if (message) {
  //     const timer = setTimeout(() => {
  //       setMessage(null);
  //     }, 5000);

  //     // Limpiar el temporizador cuando el componente se desmonte o el mensaje cambie
  //     return () => clearTimeout(timer);
  //   }
  // }, [message, setMessage]);

  // if (message === null) {
  //   return null;
  // }

  // const isError = message.includes('wrong');

  return <div className={style.success}>{messageState}</div>;
};

export default Notification;
