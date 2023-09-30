import { MovieCard } from './SingleMovie.styled';
const defaultImage =
  'https://img.freepik.com/premium-vector/photo-icon-picture-icon-image-sign-symbol-vector-illustration_64749-4409.jpg';

export default function SingleMovie({ movie }) {
  return (
    <MovieCard>
      <img
        style={{ width: 300, height: 450 }}
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
            : defaultImage
        }
        alt={movie.title}
      />
      <div>
        <h2>
          {movie.title} ({movie.release_date.slice(0, 4)})
        </h2>

        {movie.vote_average !== 0 && (
          <p>User score: {movie.vote_average.toFixed(1) * 10}%</p>
        )}

        {movie.overview && (
          <p>
            <b>Overview:</b> {movie.overview}
          </p>
        )}

        {movie.genres.length > 0 && (
          <p>
            <b>Genres:</b> {movie.genres.map(genre => `${genre.name} `)}
          </p>
        )}
      </div>
    </MovieCard>
  );
}
