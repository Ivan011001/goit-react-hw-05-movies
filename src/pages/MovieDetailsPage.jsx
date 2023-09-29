import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function MovieDetailsPage() {
  return (
    <div>
      <h1>MovieDetailsPage</h1>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>

      <div>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
