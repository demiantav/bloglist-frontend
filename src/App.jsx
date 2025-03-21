import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import blogService from './services/blogs';
import loginService from './services/login';
import HeaderUser from './components/HeaderUser';
import LoginForm from './components/LoginForm';
import FormBlog from './components/FormBlog';
import { setNotification } from './reducers/notificationReducer.js';

const App = () => {
  // const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogin = async (event) => {
    event.preventDefault();

    const credentials = {
      userName,
      password,
    };

    try {
      const user = await loginService.login(credentials);
      window.localStorage.setItem('userTokenLocal', JSON.stringify(user));
      blogService.getToken(user.token);
      setUser(user);
      dispatch(setNotification(`${user.name} is online`, 'success'));
      setUserName('');
      setPassword('');
    } catch (error) {
      console.log(error);
      dispatch(setNotification('wrong username or password', 'error'));
    }
  };

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('userTokenLocal');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.getToken(user.token);
    }
  }, []);

  return (
    <>
      <HeaderUser user={user} setUser={setUser} />
      <section>
        {user === null ? (
          <LoginForm
            handleLogin={handleLogin}
            setUserName={setUserName}
            setPassword={setPassword}
            userName={userName}
            password={password}
          />
        ) : (
          <FormBlog user={user} />
        )}
      </section>
    </>
  );
};

export default App;
