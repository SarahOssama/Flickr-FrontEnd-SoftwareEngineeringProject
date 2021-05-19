import axios from 'axios';
import Conf from './Conf';

const baseURL = Conf.Ul;
const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIxMzY3OTAyLCJqdGkiOiJjZjE3YzJiNjE4OTA0ZGMyYWZhNTAyY2E5Yjg0NjllOCIsInVzZXJfaWQiOjF9.1xxmA7SrDGEUKisF6wamp6maXHOPhtFQoNdHn6JTXvc';

const axiosInstance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    Authorization: localStorage.getItem('access_token')
      ? `JWT ${localStorage.getItem('access_token')}`
      : null,
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

axios.interceptors.request.use(
  (config) => {
    // eslint-disable-next-line no-param-reassign
    config.headers.authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => Promise.reject(error),
);

export default axiosInstance;
