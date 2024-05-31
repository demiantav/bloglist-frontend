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

const postABlog = async (blogToPost) => {
  const header = {
    headers: { Authorization: token },
  };
  try {
    const blogPosted = await axios.post(baseUrl, blogToPost, header);

    console.log(blogPosted.data);

    return blogPosted.data;
  } catch (error) {
    console.log(error);
  }
};

const updateLikes = async (objectLikes, id) => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, objectLikes);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const deleteBlog = async (id) => {
  const header = {
    headers: { Authorization: token },
  };

  try {
    await axios.delete(`${baseUrl}/${id}`, header);
  } catch (error) {
    console.log(error);
  }
};

export default { getAll, getToken, postABlog, updateLikes, deleteBlog };
