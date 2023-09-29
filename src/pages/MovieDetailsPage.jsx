import { Suspense, useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieByID } from 'services/moviesAPI';
import SingleMovie from 'components/SingleMovie';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movie = await getMovieByID(movieId);
        setMovie(movie);
      } catch (error) {
        console.warn(error);
      }
    };

    fetchMovie();
  }, [movieId]);

  return (
    <div>
      <h1>Movie Details</h1>

      {movie && <SingleMovie movie={movie} />}

      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>

      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
