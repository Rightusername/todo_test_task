import axios from 'axios';

const api = axios.create({
  baseURL: 'https://**/api',
});

export default api;
