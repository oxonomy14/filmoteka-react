import css from "./CatalogItem.module.css";

const CatalogItem = ({ movie }) => {
  {
    /*const genres = movie.genres ? movie.genres.join(", ") : "Undefined"; // Перевіряємо, чи є жанри*/
  }
  return (
    <div className={css["last-movie-box"]}>
      <img
        className={css["last-movie-small-img"]}
        src={movie.medium_cover_image}
        alt={movie.title_english}
        title={movie.title_english}
      />
      <div className={css["last-movie-small-img-rt"]}>
        <p className={css["last-movie-descr-txt"]}>IMDb: {movie.rating}</p>
      </div>

      <div className={css["last-movie-descr"]}>
        <ul className={css["last-movie-descr-list"]}>
          <li className={css["last-movie-descr-item"]}>
            <h3 className={css["last-movie-descr-subtitle"]}>
              {movie.title_long}
            </h3>
            <p className={css["last-movie-descr-txt"]}>{movie.genres}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CatalogItem;
