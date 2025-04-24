import axios from 'axios';

const URL = '/api/users';

const getAllUsers = async () => {
  try {
    const users = await axios.get(URL);
    return users.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default { getAllUsers };
