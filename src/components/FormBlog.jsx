import { useEffect } from 'react';
import Blog from './Blog';
import Notification from './Notification.jsx';
import Togglable from './Togglable.jsx';
import NewBlog from './NewBlog.jsx';
import Users from '../pages/Users.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setNotification } from '../reducers/notificationReducer.js';
import { getBlogs, postBlog } from '../reducers/blogsReducer.js';
import { Routes, Route } from 'react-router';

const FormBlog = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs);

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

  useEffect(() => {
    dispatch(getBlogs());
  }, []);

  return (
    <>
      <Togglable buttonLabel="New blog">
        <NewBlog handleBlog={handleBlog} />
      </Togglable>

      <Notification />

      {/* {blogs
        .filter((blog) => blog.userId)
        .map((filteredBlog) => (
          <Blog key={filteredBlog.id} blog={filteredBlog} user={user} />
        ))} */}
      <Routes>
        <Route path="/users" element={<Users />}></Route>
      </Routes>
    </>
  );
};

export default FormBlog;
