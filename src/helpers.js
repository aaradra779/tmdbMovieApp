import axios from 'axios';
import { tmbdApiConfig } from './config';

export const apiRoot = 'https://api.themoviedb.org/3/';

export const client = axios.create({
  baseURL: apiRoot,
});

export const imageUrl = 'https://www.themoviedb.org/t/p//w1280/';

client.interceptors.request.use(
  async function (config) {
    // console.log(ASYNC_STORAGE_JWT_KEY);
    const token = tmbdApiConfig.API_READ_ACCESS_TOKEN;

    if (token && token !== null) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
    }
    return config;
  }

  // function (error) {
  //   if (401 === error.response.status) {
  //     return (window.location = '/');
  //   } else return Promise.reject(error);
  // }
);
