import { MovieCard } from './SingleMovie.styled';

export default function SingleMovie({ movie }) {
  return (
    <MovieCard>
      <img
        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        alt={movie.title}
      />
      <div>
        <h2>
          {movie.title} ({movie.release_date.slice(0, 4)})
        </h2>
        <p>User score: {movie.vote_average.toFixed(1) * 10}%</p>

        <p>
          <b>Overview:</b> {movie.overview}
        </p>

        <p>
          <b>Genres:</b> {movie.genres.map(genre => `${genre.name} `)}
        </p>
      </div>
    </MovieCard>
  );
}
