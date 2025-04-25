import { useQuery } from '@tanstack/react-query';
import usersService from '../services/users.js';
import { Link } from 'react-router';

const Users = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['users'],
    queryFn: usersService.getAllUsers,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <div>Loading...</div>;

  console.log(data);

  return (
    <>
      <h1>Users</h1>
      <h4>blogs created</h4>

      <section>
        {data.map((user) => (
          <div key={user.id}>
            <Link to={`users/${user.id}`}>{user.userName}</Link>
            <p style={{ display: 'inline' }}>{user.blogs.length}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Users;
