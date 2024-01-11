import css from './Search.module.css';

export const Search = ({ handleOnChange, query, handleSubmit }) => {
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        value={query}
        onChange={handleOnChange}
        type="text"
        name="search"
      />
      <button className={css.btn} type="submit">
        Search
      </button>
    </form>
  );
};
