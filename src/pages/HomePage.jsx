import { useState, useEffect } from 'react';
import MovieList from 'components/MovieList';
import { getTrendingMovies } from 'services/moviesAPI';
import { TailSpin } from 'react-loader-spinner';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await getTrendingMovies();
        setMovies(response.results);
      } catch (error) {
        console.warn(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      {loading && <TailSpin />}
      <MovieList movies={movies} />
    </div>
  );
}
