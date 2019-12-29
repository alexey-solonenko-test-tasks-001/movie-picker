import { Paths } from './path-type';

export const paths: Paths = {
    pages: {
        moviesHome: {
            path: {
                routePath: 'movies',
                i18n: 'All Movies',
            }

        },
        moviesSingleMovie: {
            path: {
                routePath: 'movies/:id',
                linkPath:'/movies',
                i18n: 'Find Out More'
            }
        }
    },
    api: {
        getMovies: {
            linkPath: 'api/movies',
        },
        searchMovies: {
            linkPath: 'api/movies?name='
        }
    }
};