import axios from "axios";

export async function fetchMovieDetails(movieId) {
  const BASE_URL = "https://movie-database-api1.p.rapidapi.com/";
  const END_POINT = "movie_details.json";

  const params = new URLSearchParams({
    movie_id: movieId,
    with_images: "true",
    with_cast: "true",
  });

  const url = `${BASE_URL}${END_POINT}?${params}`;

  const headers = {
    "x-rapidapi-key": "0eebb25122mshd6b10152edde993p1dd392jsn360216e9620b",
    "x-rapidapi-host": "movie-database-api1.p.rapidapi.com",
  };
  // Тут можна написати логіку отримання деталей фільму за id
  console.log(`Завантажуємо деталі для фільму з id: ${movieId}`);

  const response = await axios.get(url, { headers });

  const showMovie = response.data.data.movie; // Повертаємо отримані
  console.log("показуємо опис фільму", showMovie); // Виведе повні дані у консоль

  return showMovie;
}
