import axios from 'axios';

const instance = axios.create({
  baseURL: '',
});

instance.interceptors.request.use((request) => {
  const token = JSON.parse(
    sessionStorage.getItem('appeltemplate.user') as string
  )?.token;

  request.headers!['Authorization'] = token;

  return request;
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error);

    // @TODO - Apply refresh token and/or redirect to login page
    // @TODO - Handle errors 404, 500, etc.

    return Promise.reject(error);
  }
);

export default instance;
