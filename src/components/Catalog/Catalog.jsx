import css from "./Catalog.module.css";
import clsx from "clsx";
import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";
import CatalogItem from "../CatalogItem/CatalogItem";

import { useEffect, useState } from "react";
import { showLastMovies } from "../../apiService/showLastMovies-api";

const Catalog = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
              <CatalogItem movie={movie} />
            </GridItem>
          ))}
        </Grid>
      </div>
    </section>
  );
};
export default Catalog;
