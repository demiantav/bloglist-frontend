import Notification from './Notification';
import useInput from '../hooks/useInput';
import { useDispatch } from 'react-redux';
import { loginUser } from '../reducers/userReducer';
import { setNotification } from '../reducers/notificationReducer';
import { Box, TextField, Button } from '@mui/material';
import style from '../components/LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const userName = useInput();
  const password = useInput();

  const handleLogin = (event) => {
    event.preventDefault();

    const credentials = {
      userName: userName.value,
      password: password.value,
    };

    dispatch(loginUser(credentials));
  };

  return (
    <>
      <form onSubmit={handleLogin} className={style.layout}>
        <h1>Login</h1>
        {/* <div>
          <label htmlFor="username">username</label>
          <input type="text" name="Username" id="username" required {...userName} />
        </div> */}

        <Box>
          <TextField
            id="standard-basic"
            variant="standard"
            label="username"
            required
            {...userName}
          />
        </Box>

        <Box>
          <TextField variant="standard" label="password" required {...password} />
        </Box>

        <button type="submit">Login</button>
      </form>
      <Notification />
    </>
  );
};

export default LoginForm;
