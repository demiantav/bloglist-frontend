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
      <h1>Bloglist</h1>
      <section className={style.grid_layout}>
        {blogs
          .filter((blog) => blog.userId)
          .map((filteredBlog) => (
            // <Blog key={filteredBlog.id} blog={filteredBlog} user={user} />

            <Link to={`/blogs/${filteredBlog.id}`} key={filteredBlog.id}>
              <img
                src="https://picsum.photos/id/237/350/300"
                alt="A random image for test"
                className={style.blog_img}
              />
              <p>{filteredBlog.title}</p>
            </Link>
          ))}
      </section>
    </>
  );
};

export default AllBlogs;
