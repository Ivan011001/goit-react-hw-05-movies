import { Link, useLocation } from 'react-router-dom';
import { StyledList, MovieCard } from './MovieList.styled';
import MovieListItem from './MovieListItem';

export default function MovieList({ movies }) {
  const location = useLocation();
  console.log(movies);

  return (
    <StyledList>
      {movies.map(movie => (
        <MovieCard key={movie.id} $image={movie.poster_path}>
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            style={{ textDecoration: 'none' }}
          >
            <MovieListItem
              title={movie.original_title}
              date={movie.release_date}
            />
          </Link>
        </MovieCard>
      ))}
    </StyledList>
  );
}
