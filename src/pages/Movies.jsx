import { fetchByQuery } from 'api/api';
import { MovieList } from 'components/MovieList/MovieList';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Search } from 'components/Search/Search';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query' ?? '');

  useEffect(() => {
    if (!searchQuery) return;
    const getMovieByQuery = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchByQuery(searchQuery);
        setMovie(results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieByQuery();
  }, [searchQuery]);

  const handleOnChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query.trim()) return;
    setSearchParams({ query });
    setQuery('');
  };

  return (
    <div>
      <Search
        handleOnChange={handleOnChange}
        query={query}
        handleSubmit={handleSubmit}
      />
      {isLoading && <Loader />}
      {error && <h2>Something went wrong</h2>}
      {movie.length > 0 && <MovieList movies={movie} />}
    </div>
  );
};
export default Movies;
