import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCreditsByID } from 'services/moviesAPI';

export default function MovieCast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const response = await getMovieCreditsByID(movieId);
        console.log(response);
        setCast(response.cast);
      } catch (error) {
        console.warn(error);
      }
    };

    fetchCredits();
  }, [movieId]);

  return (
    <>
      <b>Movie Cast</b>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <img
              style={{ width: 200, height: 300 }}
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : `https://img.freepik.com/premium-vector/photo-icon-picture-icon-image-sign-symbol-vector-illustration_64749-4409.jpg`
              }
              alt={actor.name}
            />
            <p>
              <b>Character:</b> {actor.character}
            </p>
            <p>
              <b>Name:</b> {actor.name}
            </p>
            <p></p>
          </li>
        ))}
      </ul>
    </>
  );
}
