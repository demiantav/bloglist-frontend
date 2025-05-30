import { useSelector } from 'react-redux';

import HeaderUser from './components/HeaderUser';
import LoginForm from './components/LoginForm';
import Layout from './components/Layout';

const App = () => {
  let user = useSelector((state) => state.user);

  return (
    <>
      <HeaderUser user={user} />
      {user === null ? <LoginForm /> : <Layout />}
    </>
  );
};

export default App;
