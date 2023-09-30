import { Suspense, useState, useEffect } from 'react';
import {
  Link,
  Outlet,
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { getMovieByID } from 'services/moviesAPI';
import SingleMovie from 'components/SingleMovie';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

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

      <button onClick={() => navigate(backLink)} type="button">
        Back
      </button>

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
