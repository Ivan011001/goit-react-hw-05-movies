import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'services/moviesAPI';
import MovieSearch from 'components/MovieSearch';
import MovieList from 'components/MovieList';
import { TailSpin } from 'react-loader-spinner';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('movie') ?? '';

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await getMoviesByQuery(query);
        setMovies(response.results);
      } catch (error) {
        console.warn(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  const changeQueryString = movie => {
    const nextParams = movie ? { movie } : {};
    setSearchParams(nextParams);
  };

  return (
    <div>
      <MovieSearch onSubmit={changeQueryString} />
      {loading && <TailSpin />}
      <MovieList movies={movies} />
    </div>
  );
}
