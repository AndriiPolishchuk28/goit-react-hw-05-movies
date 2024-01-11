import { fetchReviews } from 'api/api';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getReviews = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchReviews(movieId);
        setReviews(results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>For this movie no reviews</p>}
      {reviews?.length === 0 && <p>Seems like not reviews</p>}
      <ul>
        {reviews?.map(el => (
          <li key={el.id}>
            <p>Author: {el.author}</p>
            <p>{el.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
