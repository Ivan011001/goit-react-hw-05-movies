import { Suspense, useState, useEffect, useRef } from 'react';
import {
  Link,
  Outlet,
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { getMovieByID } from 'services/moviesAPI';
import SingleMovie from 'components/SingleMovie';
import { TailSpin } from 'react-loader-spinner';
import Fallback from 'components/Fallback';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const movie = await getMovieByID(movieId);
        setMovie(movie);
      } catch (error) {
        console.warn(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  return (
    <div>
      <h1>Movie Details</h1>

      <button onClick={() => navigate(backLink.current)} type="button">
        Back
      </button>

      {loading && <TailSpin />}

      {movie && <SingleMovie movie={movie} />}

      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>

      <div>
        <Suspense fallback={<Fallback />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
