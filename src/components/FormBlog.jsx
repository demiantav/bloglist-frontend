import Notification from './Notification.jsx';
import Togglable from './Togglable.jsx';
import NewBlog from './NewBlog.jsx';
import Users from '../pages/Users.jsx';
import User from '../pages/User.jsx';
import UserBlogs from '../pages/UserBlogs.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setNotification } from '../reducers/notificationReducer.js';
import { postBlog } from '../reducers/blogsReducer.js';
import { Routes, Route } from 'react-router';
import AllBlogs from '../pages/AllBlogs.jsx';

const FormBlog = () => {
  const dispatch = useDispatch();
  const { blogs, user } = useSelector((state) => state);

  const handleBlog = (blog) => {
    try {
      dispatch(postBlog(blog));
      dispatch(
        setNotification(`a new blog You're NOT gonna need it! by ${blog.author} added`, 'success')
      );
    } catch (error) {
      console.log(error);
      dispatch(setNotification(`${error}`, 'error'));
    }
  };

  return (
    <>
      <Togglable buttonLabel="New blog">
        <NewBlog handleBlog={handleBlog} />
      </Togglable>

      <Notification />

      <Routes>
        <Route path="/" element={<AllBlogs />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/users/:id" element={<User />}></Route>
        <Route path="blogs/:id" element={<UserBlogs />}></Route>
      </Routes>
    </>
  );
};

export default FormBlog;
