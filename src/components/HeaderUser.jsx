import { resetUser } from '../reducers/userReducer';
import { useDispatch } from 'react-redux';
import style from '../components/HeaderUser.module.css';

import { NavLink, Route, Router, Routes } from 'react-router';

const HeaderUser = ({ user }) => {
  const dispatch = useDispatch();

  const logOut = () => {
    window.localStorage.clear();
    dispatch(resetUser());
  };

  return (
    <>
      {user === null ? (
        <header className={style.header}>
          <div className="container"></div>
        </header>
      ) : (
        <header className={style.header}>
          <div className={style.header__container}>
            <nav className={style.header__nav}>
              <NavLink to={'/'}>blogs</NavLink>
              <NavLink to={'/users'}>users</NavLink>
              <NavLink to={'/blogForm'}>add blog</NavLink>
            </nav>
            <div className={style.header__logout}>
              <button onClick={logOut}>Logout</button>
              <p>{user.name}</p>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default HeaderUser;
