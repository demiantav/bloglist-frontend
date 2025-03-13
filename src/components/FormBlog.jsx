import { useState } from 'react';
import Blog from './Blog';
import service from '../services/blogs.js';
import Notification from './Notification.jsx';
import Togglable from './Togglable.jsx';
import NewBlog from './NewBlog.jsx';

const FormBlog = ({ blogs, setBlogs, message, setMessage, user }) => {
  const handleBlog = async (blog) => {
    try {
      const blogPosted = await service.postABlog(blog);
      {
        console.log(blogPosted);
      }

      setBlogs(blogs.concat(blogPosted));
      setMessage(`a new blog You're NOT gonna need it! by ${blog.author} added`);
    } catch (error) {
      console.log(error);
      setMessage(error);
    }
  };

  return (
    <>
      <Togglable buttonLabel="New blog">
        <NewBlog handleBlog={handleBlog} />
      </Togglable>

      <Notification message={message} setMessage={setMessage} />

      {blogs
        .filter((blog) => blog.userId)
        .map((filteredBlog) => (
          <Blog
            key={filteredBlog.id}
            blog={filteredBlog}
            user={user}
            blogs={blogs}
            setBlogs={setBlogs}
          />
        ))}
    </>
  );
};

export default FormBlog;
