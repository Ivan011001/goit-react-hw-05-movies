import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'a4945f5baf314d3166a7a8a0f6fe2bd8',
  },
});

export const getPopularMovies = async () => {
  const response = await axiosInstance.get('trending/movie/day');
  return response.data;
};
