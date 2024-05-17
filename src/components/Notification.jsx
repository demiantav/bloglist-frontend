import React, { useEffect } from 'react';

const Notification = ({ message, setMessage }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
      }, 5000);

      // Limpiar el temporizador cuando el componente se desmonte o el mensaje cambie
      return () => clearTimeout(timer);
    }
  }, [message, setMessage]);

  if (message === null) {
    return null;
  }

  return <p style={{ color: 'black' }}>{message}</p>;
};

export default Notification;
