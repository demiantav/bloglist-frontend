import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteABlog } from '../reducers/blogsReducer.js';
import blogService from '../services/blogs.js';

const Blog = ({ blog, user }) => {
  const [showBlog, setShowBlog] = useState(false);
  const [likes, setLikes] = useState(blog.likes);

  const isVisible = { display: showBlog ? '' : 'none' };

  // console.log(blog);
  // console.log(user);

  let updatedBlog;

  const dispatch = useDispatch();

  const handleVisible = () => {
    setShowBlog(!showBlog);
  };

  const setLike = async (event) => {
    event.preventDefault();

    const newLike = likes + 1;

    try {
      updatedBlog = await blogService.updateLikes(
        {
          likes: newLike,
        },
        blog.id
      );

      setLikes(updatedBlog.likes);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBlog = async (id) => {
    const confirm = window.confirm(`Remove ${blog.title} by ${blog.author} ?`);

    if (confirm) {
      dispatch(deleteABlog(id));
    }
  };

  const styleUl = {
    border: 'solid',
    marginBlock: '1rem',
  };

  return (
    <>
      <ul style={styleUl} className="blog">
        {blog.title}
        <button onClick={handleVisible}>{showBlog ? 'Hide' : 'Show'}</button>

        <div style={isVisible} className="blogContent">
          <p style={{ color: 'black' }}>{blog.author}</p>
          <a href={blog.url}>{blog.url}</a>
          <p style={{ color: 'black' }}>
            {likes}
            <button className="button-like" onClick={setLike}>
              Like
            </button>
          </p>

          {user.user === blog.userId.userName && (
            <button onClick={() => deleteBlog(blog.id)}>Delete</button>
          )}
        </div>
      </ul>
    </>
  );
};

export default Blog;
