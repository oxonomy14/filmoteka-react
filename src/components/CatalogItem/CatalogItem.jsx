import css from "./CatalogItem.module.css";
import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    listener();
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
};

const CatalogItem = ({ movie, onMovieClick }) => {
  const genres = movie.genres ? movie.genres.join(" | ") : "Undefined"; // Перевіряємо, чи є жанри
  const genresArray = Array.isArray(movie.genres) ? movie.genres : [];
  const isLargeScreen = useMediaQuery("(min-width: 768px)");
  return (
    <div className={css["last-movie-box"]} onClick={() => onMovieClick(movie)}>
      <img
        className={css["last-movie-small-img"]}
        src={movie.medium_cover_image}
        alt={movie.title_english}
        title={movie.title_english}
      />
      <div className={css["last-movie-small-img-rt"]}>
        <p className={css["last-movie-rt-txt"]}>IMDb: {movie.rating}</p>
      </div>

      <div className={css["last-movie-descr"]}>
        <h3 className={css["last-movie-descr-subtitle"]}>{movie.title_long}</h3>

        {!isLargeScreen ? (
          genresArray.map((genre) => (
            <ul
              key={crypto.randomUUID()}
              className={css["last-movie-descr-txt-list"]}
            >
              <li className={css["last-movie-descr-txt"]}>{genre}</li>
            </ul>
          ))
        ) : (
          <p className={css["last-movie-descr-txt"]}>{genres}</p>
        )}
      </div>
    </div>
  );
};

export default CatalogItem;
