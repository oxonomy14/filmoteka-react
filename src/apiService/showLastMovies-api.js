import axios from "axios";

axios.defaults.baseURL =
  "https://movie-database-api1.p.rapidapi.com/list_movies.json";

axios.defaults.params = {
  orientation: "landscape",
  per_page: 15,
};

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(`search?query=${query}&page=${page}`);
  console.log(data);

  return data;
};

const BASE_URL = "https://movie-database-api1.p.rapidapi.com/";
const END_POINT = "list_movies.json";

const params = new URLSearchParams({
  limit: "8",
  page: "1",
  quality: "all",
  genre: "all",
  minimum_rating: "0",
  query_term: "0",
  sort_by: "year",
  order_by: "desc",
});

const url = `${BASE_URL}${END_POINT}?${params}`;

const headers = {
  "x-rapidapi-key": "0eebb25122mshd6b10152edde993p1dd392jsn360216e9620b",
  "x-rapidapi-host": "movie-database-api1.p.rapidapi.com",
};

export async function showLastMovies() {
  const response = await axios.get(url, { headers });

  const movies = response.data.data.movies; // Повертаємо отримані дані

  return movies;
}
