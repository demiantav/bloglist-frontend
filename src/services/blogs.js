import axios from 'axios';
const baseUrl = '/api/blogs';

let token = null;

const getToken = (tokenId) => {
  token = `Bearer ${tokenId}`;
};

const getAll = () => {
  const request = axios.get(baseUrl);

  const data = request.then((response) => {
    console.log(response.data);

    return response.data;
  });

  return data;
};

export default { getAll, getToken };
