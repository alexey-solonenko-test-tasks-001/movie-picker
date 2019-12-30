import { Movie } from '../app/movies/movie.model';

export interface ApiRes {
    movies: Array<Movie>,
    genres: Array<string>,
}