import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_ROUTE_BACKEND,
  withCredentials: true,
})

export default instance