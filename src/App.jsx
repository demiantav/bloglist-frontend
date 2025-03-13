import { useState, useEffect } from 'react';
import Blog from './components/Blog';
import blogService from './services/blogs';
import loginService from './services/login';
import HeaderUser from './components/HeaderUser';
import LoginForm from './components/LoginForm';
import FormBlog from './components/FormBlog';
import './components/style.css';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

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
      setMessage(null);
      setUserName('');
      setPassword('');
    } catch (error) {
      console.log(error);
      setMessage('wrong username or password');
    }
  };

  useEffect(() => {
    blogService.getAll().then((blogs) => {
      blogs.sort((a, b) => b.likes - a.likes);
      setBlogs(blogs);
    });
  }, []);

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
            setMessage={setMessage}
            userName={userName}
            password={password}
            message={message}
          />
        ) : (
          <FormBlog
            blogs={blogs}
            setBlogs={setBlogs}
            message={message}
            setMessage={setMessage}
            user={user}
          />
        )}
      </section>
    </>
  );
};

export default App;
