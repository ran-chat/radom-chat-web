import axios from 'axios';

export const config = {
  headers: {
    'Content-type': 'application/json',
    // Authorization: `Bearer ${getCookie('AccessToken')}`,
  },
  withCredentials: true,
};

export const API = axios.create(config);
