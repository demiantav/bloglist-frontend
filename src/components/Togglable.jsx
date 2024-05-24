import { useState } from 'react';

const Togglable = (props) => {
  const [visible, setVisible] = useState(true);

  const isVisible = { display: visible ? '' : 'none' },
    notVisible = { display: visible ? 'none' : '' };

  const changeVisibility = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div style={isVisible}>
        <button onClick={changeVisibility}>{props.buttonLabel}</button>
      </div>
      <div style={notVisible}>
        {props.children}

        <button onClick={changeVisibility}>cancel</button>
      </div>
    </>
  );
};

export default Togglable;
