import css from "./MovieModal.module.css";
import Modal from "react-modal";
import { fetchMovieDetails } from "../../apiService/movieDetails-api";
import { useEffect, useState } from "react";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "70vw", // або фіксована: "800px"
    height: "85vh", // або фіксована: "600px"
    overflow: "auto", // щоб можна було скролити, якщо вміст великий
    padding: "20px", // бажано трохи внутрішніх відступів
    borderRadius: "10px", // для краси
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.75)",
  },
};

const MovieModal = ({ isOpen, onRequestClose, selectedMovie }) => {
  console.log("selectedMovieID", selectedMovie?.id);

  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    if (selectedMovie?.id) {
      fetchMovieDetails(selectedMovie.id)
        .then((data) => {
          setMovieDetails(data);
        })
        .catch((error) => {
          console.error("Error fetching movie details:", error);
        });
    }
  }, [selectedMovie]);

  useEffect(() => {
    if (!isOpen) {
      setMovieDetails(null);
    }
  }, [isOpen]);

  const genres = movieDetails?.genres?.join(", ") || "Undefined"; // Перевіряємо, чи є жанри
  console.log("Жанр:", genres);

  // Перевіряємо, чи є актори
  const actors = movieDetails?.cast;

  console.log("масив акторів", actors);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel={`Details about ${selectedMovie?.title_english || "movie"}`}
    >
      <>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={onRequestClose}
            style={{
              backgroundColor: "red",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              marginBottom: "15px",
              marginRight: "15px",
            }}
          >
            Close
          </button>
        </div>
        <div className={css["about-movie-container"]}>
          <div className={css["about-movie-img"]}>
            <img
              src={movieDetails?.large_cover_image}
              alt={movieDetails?.title_english}
              title={movieDetails?.title_english}
            />
            <div className={css["actor-img-list"]}>
              {actors?.length ? (
                actors.map((actor) => (
                  <img
                    key={actor.imdb_code}
                    src={
                      actor.url_small_image || "/images/placeholder-actor.jpg"
                    }
                    alt={actor.name}
                    title={actor.name}
                    className={css["actor-img"]}
                  />
                ))
              ) : (
                <p>No actor images available</p>
              )}
            </div>
          </div>
          <div className={css["about-movie-box"]}>
            <div className={css["about-movie-item"]}>
              <h3 className={css["about-movie-title"]}>
                {movieDetails?.title_long}
              </h3>

              <p className={css["about-movie-txt"]}>
                <span>Genres: </span>
                {genres}
              </p>
              <p className={css["about-movie-txt"]}>
                <span>IMDb rating: </span>
                {movieDetails?.rating}
              </p>
              <p className={css["about-movie-txt"]}>
                <span>Year: </span>
                {movieDetails?.year}
              </p>
              <p className={css["about-movie-txt"]}>
                <span>Actors: </span>
                {actors?.length
                  ? actors.map((actor, index) => (
                      <span key={actor.imdb_code}>
                        {actor.name} as <u>{actor.character_name}</u>
                        {index < actors.length - 1 && ", "}
                      </span>
                    ))
                  : "No actors available"}
              </p>

              <div className={css["screen-img"]}>
                <ul className={css["screen-img-list"]}>
                  <li className={css["screen-img-item"]}>
                    <a href={movieDetails?.large_screenshot_image1}>
                      <img
                        src={movieDetails?.medium_screenshot_image1}
                        alt={movieDetails?.title_english}
                        title={movieDetails?.title_english}
                      />
                    </a>
                  </li>
                  <li className={css["screen-img-item"]}>
                    <a href={movieDetails?.large_screenshot_image2}>
                      <img
                        src={movieDetails?.medium_screenshot_image2}
                        alt={movieDetails?.title_english}
                        title={movieDetails?.title_english}
                      />
                    </a>
                  </li>
                  <li className={css["screen-img-item"]}>
                    <a href={movieDetails?.large_screenshot_image3}>
                      <img
                        src={movieDetails?.medium_screenshot_image3}
                        alt={movieDetails?.title_english}
                        title={movieDetails?.title_english}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <p className={css["about-movie-descr"]}>
              <span>Description: </span>
              {movieDetails?.description_full ||
                "Sorry! Movie description not added yet"}
            </p>
          </div>
        </div>
      </>
    </Modal>
  );
};

export default MovieModal;
