import { useQuery } from '@tanstack/react-query';
import usersService from '../services/users.js';

const Users = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['users'],
    queryFn: usersService.getUsers,
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
          <div>
            <p key={user.id}>
              {user.userName} <span>{user.blogs.length}</span>
            </p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Users;
