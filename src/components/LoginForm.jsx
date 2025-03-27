import Notification from './Notification';
import useInput from '../hooks/useInput';
import { useDispatch } from 'react-redux';
import { loginUser } from '../reducers/userReducer';

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
      <form onSubmit={handleLogin} className="login-form">
        <h1>Login</h1>
        <div>
          <label htmlFor="username">username</label>
          <input type="text" name="Username" id="username" required {...userName} />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="Password" id="password" required {...password} />
        </div>

        <button type="submit">Login</button>
      </form>
      <Notification />
    </>
  );
};

export default LoginForm;
