import css from "./Catalog.module.css";
import clsx from "clsx";
import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";
import CatalogItem from "../CatalogItem/CatalogItem";
import MovieModal from "../MovieModal/MovieModal";

import { useEffect, useState } from "react";
import { showLastMovies } from "../../apiService/showLastMovies-api";

const Catalog = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const openModal = (currentMovie) => {
    setSelectedMovie(currentMovie);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedMovie(null);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      // Перевірка кешу
      const cached = localStorage.getItem("cachedshowLastMovies");
      if (cached) {
        setMovies(JSON.parse(cached));
        setIsLoading(false);
        return;
      }

      try {
        const movies = await showLastMovies();
        setMovies(movies);
        // Зберігаємо у кеш
        localStorage.setItem("cachedshowLastMovies", JSON.stringify(movies));
      } catch (error) {
        console.log("Error fetching movies:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <section>
      <div className={clsx("container", css.wrapper)}>
        <Grid>
          {movies.map((movie) => (
            <GridItem key={movie.id}>
              <CatalogItem movie={movie} onMovieClick={openModal} />
            </GridItem>
          ))}
        </Grid>
        <MovieModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          selectedMovie={selectedMovie}
        />
      </div>
    </section>
  );
};
export default Catalog;
