import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mn-guidance.herokuapp.com/v1',
  timeout: 8000,
});

export default api;
