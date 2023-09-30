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
import Section from 'components/Section';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { GoBack } from './MovieDetail.styled';

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
    <Section title="Movie Details">
      <GoBack onClick={() => navigate(backLink.current)} type="button">
        <BsFillArrowLeftSquareFill size={24} /> Go back
      </GoBack>

      {loading && <TailSpin />}

      {movie && <SingleMovie movie={movie} />}

      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>

      <div>
        <Suspense fallback={<Fallback />}>
          <Outlet />
        </Suspense>
      </div>
    </Section>
  );
}
