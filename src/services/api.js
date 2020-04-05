import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.11:8000/v1',
  timeout: 5000,
});

export default api;
