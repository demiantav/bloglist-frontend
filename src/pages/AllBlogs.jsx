import { useSelector, useDispatch } from 'react-redux';
import Blog from '../components/Blog';
import { useEffect } from 'react';
import { getBlogs } from '../reducers/blogsReducer';
import { Link } from 'react-router';
import style from '../pages/AllBlogs.module.css';

const AllBlogs = () => {
  const { user, blogs } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs());
  }, []);

  if (blogs.length === 0) return <p>Loading...</p>;

  return (
    <>
      <section className={style.grid_layout}>
        {blogs
          .filter((blog) => blog.userId)
          .map((filteredBlog) => (
            // <Blog key={filteredBlog.id} blog={filteredBlog} user={user} />

            <Link to={`/blogs/${filteredBlog.id}`} key={filteredBlog.id}>
              <img src="https://picsum.photos/200/200" alt="A random image for test" />
              <p>{filteredBlog.title}</p>
            </Link>
          ))}
      </section>
    </>
  );
};

export default AllBlogs;
