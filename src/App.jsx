import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import blogService from './services/blogs';
import HeaderUser from './components/HeaderUser';
import LoginForm from './components/LoginForm';
import FormBlog from './components/FormBlog';
import { loginUser } from './reducers/userReducer.js';

const App = () => {
  const dispatch = useDispatch();

  let user = useSelector((state) => state.user);

  // useEffect(() => {
  //   const loggedUserJSON = window.localStorage.getItem('userTokenLocal');

  //   if (loggedUserJSON) {
  //     const userToLog = JSON.parse(loggedUserJSON);

  //     console.log(userToLog);
  //     console.log(user);
  //   }
  // }, []);

  return (
    <>
      <HeaderUser user={user} />
      <main>{user === null ? <LoginForm /> : <FormBlog />}</main>
    </>
  );
};

export default App;
