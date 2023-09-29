import { useState, useEffect } from 'react';
import MovieList from 'components/MovieList';
import { getTrendingMovies } from 'services/moviesAPI';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getTrendingMovies();
        setMovies(response.results);
      } catch (error) {
        console.warn(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      <MovieList movies={movies} />
    </div>
  );
}
