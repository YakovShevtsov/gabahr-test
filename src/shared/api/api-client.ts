import axios from 'axios';

const API_BASE_URL = 'https://dummyjson.com'; // potentially move to .env

export const apiClient = axios.create({
  baseURL: API_BASE_URL,

  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error);
    return Promise.reject(error);
  },
);
