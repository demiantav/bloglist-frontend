import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useState } from 'react';
import blogService from '../services/blogs.js';

const UserBlogs = () => {
  const { blogs } = useSelector((state) => state);

  const blogId = useParams().id;

  const blog = blogs.find((blog) => blog.id === blogId);
  const [like, setLikes] = useState(blog.likes);

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
    </>
  );
};

export default UserBlogs;
