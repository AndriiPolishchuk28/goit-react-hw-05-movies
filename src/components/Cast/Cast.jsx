import { fetchCastInfo } from 'api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  const [castInfo, setCastInfo] = useState();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCastInfo = async () => {
      try {
        setIsLoading(true);
        const res = await fetchCastInfo(movieId);
        setCastInfo(res);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getCastInfo();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <h2>Something went wrong</h2>}
      {castInfo?.cast.length === 0 && <p>Seems like not cast info</p>}
      {castInfo?.cast.map(el => (
        <div key={el.id}>
          <img
            src={
              el.profile_path
                ? `https://image.tmdb.org/t/p/w500/${el.profile_path}`
                : defaultImg
            }
            alt="profile_photo"
            width={150}
          />
          <p>Name: {el.name}</p>
          <p>Character: {el.character}</p>
        </div>
      ))}
    </div>
  );
};

export default Cast;
