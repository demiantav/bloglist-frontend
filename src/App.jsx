import { useState, useEffect } from 'react';
import Blog from './components/Blog';
import blogService from './services/blogs';
import loginService from './services/login';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

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
      setUserName('');
      setPassword('');
    } catch (error) {
      console.log(error);
    }
  };

  const loginForm = () => (
    <form onSubmit={handleLogin} className="login-form">
      <div>
        <label htmlFor="username">username</label>
        <input type="text" value={userName} name="Username" id="username" onChange={({ target }) => setUserName(target.value)} />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" value={password} name="Password" id="password" onChange={({ target }) => setPassword(target.value)} />
      </div>

      <button type="submit">Login</button>
    </form>
  );

  const postBlogForm = () => (
    <form action="">
      <input type="checkbox" name="" id="" />
    </form>
  );

  return (
    <div>
      <h2>{user === null ? 'Login' : 'List Blogs'}</h2>

      {user === null ? (
        loginForm()
      ) : (
        <div>
          {postBlogForm()}
          <p>{user.name} logged in</p>
        </div>
      )}

      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default App;
