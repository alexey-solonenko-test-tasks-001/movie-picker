import { Paths } from './path-type';

export const paths: Paths = {
    pages: {
        moviesHome: {
            path: {
                routePath: 'movies',
                i18n: 'All Movies',
            }

        },
        moviesList:{
            path: {
                routePath:'list',
                linkPath:'/list',
                i18n:'Movies List',
            }
        },
        moviesSingleMovie: {
            path: {
                routePath: 'detail/:id',
                linkPath:'/detail',
                i18n: 'Find Out More'
            }
        }
    },
    api: {
        getMovies: {
            linkPath: 'api/movies',
        },
        getGenres:{
          linkPath: 'api/genres',  
        },
        searchMovies: {
            linkPath: 'api/movies?name='
        }
    }
};