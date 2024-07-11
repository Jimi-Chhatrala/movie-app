import axios from "axios";

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_REACT_APP_MOVIE_API_KEY
}`;

export const fetchMovies = async (movieName) =>
  axios.get(`${API_ENDPOINT}&s=${movieName}`);

export const fetchMovie = async (movieId) =>
  axios.get(`${API_ENDPOINT}&i=${movieId}`);
