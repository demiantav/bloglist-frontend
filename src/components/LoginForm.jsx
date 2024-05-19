import Notification from './Notification';

const LoginForm = ({
  handleLogin,
  setUserName,
  setPassword,
  userName,
  password,
  message,
  setMessage,
}) => {
  return (
    <>
      <form onSubmit={handleLogin} className="login-form">
        <h1>Login</h1>
        <div>
          <label htmlFor="username">username</label>
          <input
            type="text"
            value={userName}
            name="Username"
            id="username"
            onChange={({ target }) => setUserName(target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            name="Password"
            id="password"
            onChange={({ target }) => setPassword(target.value)}
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>
      <Notification message={message} setMessage={setMessage} />;
    </>
  );
};

export default LoginForm;
