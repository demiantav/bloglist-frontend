import { useState } from 'react';
import Blog from './Blog';
import service from '../services/blogs.js';
import Notification from './Notification.jsx';
import Togglable from './Togglable.jsx';

const FormBlog = ({ blogs, setBlogs, message, setMessage, user }) => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const handleBlog = async (event) => {
    event.preventDefault();

    const blog = {
      author,
      title,
      url,
    };

    try {
      const blogPosted = await service.postABlog(blog);
      setAuthor('');
      setTitle('');
      setUrl('');

      setBlogs(blogs.concat(blogPosted));
      setMessage(`a new blog You're NOT gonna need it! by ${author} added`);
    } catch (error) {
      console.log(error);
      setMessage(error);
    }
  };

  return (
    <>
      <Togglable buttonLabel="New blog">
        <form onSubmit={handleBlog}>
          <h1>Add Blog</h1>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              value={title}
              name="title"
              id="title"
              onChange={({ target }) => setTitle(target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="author">Author</label>
            <input
              type="text"
              value={author}
              name="author"
              id="author"
              onChange={({ target }) => setAuthor(target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="url">Url</label>
            <input
              type="text"
              value={url}
              name="url"
              id="url"
              onChange={({ target }) => setUrl(target.value)}
              required
            />
          </div>

          <button type="submit">Save</button>
        </form>
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
