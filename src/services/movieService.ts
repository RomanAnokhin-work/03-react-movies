import axios from "axios";
import type { Movie, Movies} from "../types/movie";

const myKey = import.meta.env.VITE_TMDB_TOKEN;

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/search",
    timeout: 1000,
  headers: {
    Authorization: `Bearer ${myKey}`,
    accept: "application/json",
  },
});

async function getMovies(movieQuery: string):Promise<Movie[]> {
  const response = await instance.get<Movies>(`/movie?query=${movieQuery}`);
  
  return response.data.results;
}
export default getMovies;
