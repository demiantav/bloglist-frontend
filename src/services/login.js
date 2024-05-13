import axios from 'axios';

const loginUrl = '/api/login';

const login = async (credentials) => {
  try {
    const userLogged = await axios.post(loginUrl, credentials);
    console.log(userLogged);
    return userLogged.data;
  } catch (error) {
    console.log(error);
  }
};

export default { login };
