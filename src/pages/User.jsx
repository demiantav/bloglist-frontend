import { useParams } from 'react-router';
import { useQueryClient } from '@tanstack/react-query';

const User = () => {
  const queryClient = useQueryClient();
  const userId = useParams().id;

  const data = queryClient.getQueryData(['users']);
  const user = data.find((el) => el.id === userId);

  console.log(user);

  return (
    <>
      <h1>{user.userName}</h1>
      <br></br>
      <h2>added blogs</h2>
      <br></br>

      <ul>
        {user.blogs.map((blog) => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </>
  );
};

export default User;
