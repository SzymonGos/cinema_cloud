// To obtain a unique API key, please visit https://developers.themoviedb.org/3/getting-started/introduction and follow instruction
const API_URL = 'https://api.themoviedb.org/3/';

const API_KEY = process.env.MOVIE_API_KEY;

const SEARCH_URL = `${API_URL}search/movie?api_key=${API_KEY}&query=`;

const POPULAR_MOVIES_URL = `${API_URL}movie/popular?api_key=${API_KEY}`;

// backdrop_sizes: w300, w780, w1280, original 
const BACKDROP_SIZE = 'w1280'
const IMAGE_URL = 'https://image.tmdb.org/t/p/';

// poster_sizes: w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w500'

export {API_KEY, API_URL, POPULAR_MOVIES_URL, IMAGE_URL, BACKDROP_SIZE, POSTER_SIZE}