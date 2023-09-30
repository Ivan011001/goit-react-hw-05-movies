import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'services/moviesAPI';
import MovieSearch from 'components/MovieSearch';
import MovieList from 'components/MovieList';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('movie') ?? '';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getMoviesByQuery(query);
        setMovies(response.results);
      } catch (error) {
        console.warn(error);
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
      <MovieList movies={movies} />
    </div>
  );
}
