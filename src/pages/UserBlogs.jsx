import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useState } from 'react';
import blogService from '../services/blogs.js';
import useInput from '../hooks/useInput';
import { getBlogs } from '../reducers/blogsReducer';

const UserBlogs = () => {
  const { blogs } = useSelector((state) => state);
  const dispatch = useDispatch();

  const blogId = useParams().id;

  const blog = blogs.find((blog) => blog.id === blogId);
  const [like, setLikes] = useState(blog.likes);
  const comment = useInput();

  console.log(blog);
  console.log(blogs);

  const setLike = async (event) => {
    event.preventDefault();

    const newLike = like + 1;

    try {
      const updatedBlog = await blogService.updateLikes(
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

  const setComment = async (e) => {
    e.preventDefault();
    try {
      await blogService.addComment(blog.id, comment.value);
      dispatch(getBlogs());
      comment.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>{blog.title}</h1>
      <div>
        <a href={blog.url}>{blog.url}</a>
        <p>
          {like}
          <button onClick={setLike}>Like</button>
        </p>
        <p>added by {blog.userId.userName}</p>
      </div>

      <section className="comments">
        <h2>Comments</h2>

        <form onSubmit={setComment}>
          <input type="text" {...comment} />
          <button type="submit">add comment</button>
        </form>
        <ul>
          {blog.comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default UserBlogs;
