import { NavLink, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  const path = location.pathname === '/movies';

  return (
    <>
      <ul className={css.wrap_list}>
        {movies.map(({ id, title, name }) => (
          <li key={id}>
            <NavLink
              state={{ from: location }}
              className={css.list_item}
              to={path ? `${id}` : `/movies/${id}`}
            >
              {title || name}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};
