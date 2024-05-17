import '../components/style.css';

const HeaderUser = ({ user, setUser }) => {
  const logOut = () => {
    window.localStorage.clear();
    setUser(null);
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
