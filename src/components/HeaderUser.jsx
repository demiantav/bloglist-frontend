import '../components/style.css';
import { resetUser } from '../reducers/userReducer';
import { useDispatch } from 'react-redux';

const HeaderUser = ({ user }) => {
  const dispatch = useDispatch();

  const logOut = () => {
    window.localStorage.clear();
    dispatch(resetUser());
  };

  return (
    <>
      {user === null ? (
        <header className="header-style">
          <div className="container">
            <div>
              <img src="" alt="" />
            </div>
            <div className="logout"></div>
          </div>
        </header>
      ) : (
        <header className="header-style">
          <div className="container">
            <div>
              <img src="" alt="" />
            </div>
            <div className="logout">
              <p>{user.name}</p>
              <button onClick={logOut}>Logout</button>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default HeaderUser;
