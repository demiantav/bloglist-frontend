import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, TextField, Button, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Notification from './Notification';
import useInput from '../hooks/useInput';
import { loginUser } from '../reducers/userReducer';
import style from '../components/LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const userName = useInput();
  const password = useInput();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

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
      <main>
        <form onSubmit={handleLogin} className={style.layout}>
          <h1 style={{ textAlign: 'center', fontFamily: 'Roboto' }}>Login</h1>

          <p>Hey, Enter your details to get sign in to your account</p>

          <Box>
            <TextField variant="outlined" label="username" required {...userName} fullWidth />
          </Box>

          <Box>
            <TextField
              variant="outlined"
              label="password"
              type={showPassword ? 'text' : 'password'}
              required
              fullWidth
              {...password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={showPassword ? 'hide the password' : 'display the password'}
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Button variant="contained" color="primary" type="submit">
            Sign in
          </Button>
        </form>
        <Notification />
      </main>
    </>
  );
};

export default LoginForm;
