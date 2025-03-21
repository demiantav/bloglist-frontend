import { useEffect } from 'react';
import Blog from './Blog';
import service from '../services/blogs.js';
import Notification from './Notification.jsx';
import Togglable from './Togglable.jsx';
import NewBlog from './NewBlog.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setNotification } from '../reducers/notificationReducer.js';
import { getBlogs } from '../reducers/blogsReducer.js';

const FormBlog = ({ user }) => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs);

  const handleBlog = async (blog) => {
    try {
      const blogPosted = await service.postABlog(blog);
      {
        console.log(blogPosted);
      }

      setBlogs(blogs.concat(blogPosted));
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

      {blogs
        .filter((blog) => blog.userId)
        .map((filteredBlog) => (
          <Blog key={filteredBlog.id} blog={filteredBlog} user={user} />
        ))}
    </>
  );
};

export default FormBlog;
