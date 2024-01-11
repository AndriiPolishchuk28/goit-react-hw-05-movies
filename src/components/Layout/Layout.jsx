import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <header>
      <nav className={css.navbar}>
        <NavLink
          className={({ isActive }) =>
            `${css.nav_link} ${isActive ? css.active : ''}`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${css.nav_link} ${isActive ? css.active : ''}`
          }
          to="/movies"
        >
          Movie
        </NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </header>
  );
};
