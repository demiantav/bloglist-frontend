import { useSelector, useDispatch } from 'react-redux';
import Blog from '../components/Blog';
import { useEffect } from 'react';
import { getBlogs } from '../reducers/blogsReducer';
import { Link } from 'react-router';

const AllBlogs = () => {
  const { user, blogs } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs());
  }, []);

  if (blogs.length === 0) return <p>Loading...</p>;

  return (
    <>
      {blogs
        .filter((blog) => blog.userId)
        .map((filteredBlog) => (
          // <Blog key={filteredBlog.id} blog={filteredBlog} user={user} />
          <Link to={`/blogs/${filteredBlog.id}`} key={filteredBlog.id}>
            <p>{filteredBlog.title}</p>
          </Link>
        ))}
    </>
  );
};

export default AllBlogs;
