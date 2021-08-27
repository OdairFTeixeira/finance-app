import axios from 'axios';

const api = axios.create({
  baseURL: 'https://finance-java8-backend.herokuapp.com'
  //baseURL: '127.0.0.1:8080'
});

export default api;