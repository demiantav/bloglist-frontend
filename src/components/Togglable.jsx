import { useState } from 'react';
import PropTypes from 'prop-types';

const Togglable = (props) => {
  const [visible, setVisible] = useState(true);

  const isVisible = { display: visible ? '' : 'none' },
    notVisible = { display: visible ? 'none' : '' };

  const changeVisibility = () => {
    setVisible(!visible);
  };

  Togglable.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
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
