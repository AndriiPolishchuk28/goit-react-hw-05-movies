import { NavLink, Link, Outlet, useLocation } from 'react-router-dom';
import css from './MovieInfo.module.css';
import { Suspense, useRef } from 'react';

export const MovieInfo = ({ info }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const { title, poster_path, release_date, vote_average, overview, genres } =
    info;

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  const genresName = genres.map(el => el.name).join(' ');
  return (
    <div className={css.wrap}>
      <NavLink to={backLink.current} className={css.go_back}>
        Go back
      </NavLink>
      <div className={css.movie_wrap}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          alt="poster"
          width={400}
          height={550}
        />

        <div className={css.info_wrap}>
          <h2>
            {title} ({release_date.slice(0, 4)})
          </h2>
          <p>User score: {(vote_average * 10).toFixed(0)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genresName}</p>
        </div>
      </div>
      <ul>
        <h3>Additional information</h3>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
