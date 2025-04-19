import axios from 'axios';

const URI = '/api/users';

const getUsers = async () => {
  try {
    const users = await axios.get(URI);

    return users.data;
  } catch (error) {
    console.log(error);
  }
};

export default { getUsers };
