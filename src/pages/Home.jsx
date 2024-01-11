import { useState, useEffect } from 'react';
import { fetchTranding } from 'api/api';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';
import css from './Home.module.css';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTranding = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchTranding();
        setTrendingMovies(results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getTranding();
  }, []);

  return (
    <div>
      <h1 className={css.title}>Tranding Films</h1>
      <MovieList movies={trendingMovies} />
      {isLoading && <Loader />}
      {error && <h2>Something went wrong</h2>}
    </div>
  );
};

export default Home;
