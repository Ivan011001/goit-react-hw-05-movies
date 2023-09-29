import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviewsByID } from 'services/moviesAPI';

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await getMovieReviewsByID(movieId);
        setReviews(response.results);
      } catch (error) {
        console.warn(error);
      }
    };

    getReviews();
  }, [movieId]);

  return (
    <>
      <b>Reviews:</b>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <b>{review.author}:</b>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry... There are no reviews</p>
      )}
    </>
  );
}
