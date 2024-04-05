import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

export const fetchData = async () => {
  try {
    const response = await api.get('/data');
    return response.data;
  } catch (error) {
    throw error;
  }
};
