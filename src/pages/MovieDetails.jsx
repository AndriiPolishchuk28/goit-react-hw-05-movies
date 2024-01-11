import { useParams } from 'react-router-dom';
import { fetchMovieById } from 'api/api';
import { useEffect, useState } from 'react';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const { movieId } = useParams();

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovieById = async () => {
      try {
        setIsLoading(true);
        const res = await fetchMovieById(movieId);
        setMovie(res);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieById();
  }, [movieId]);
  return (
    <>
      {isLoading && <Loader />}
      {error && <h2>Something went wrong</h2>}
      {movie && <MovieInfo info={movie} />}
    </>
  );
};
export default MovieDetails;
