import { Paths } from './path-type';

export const paths: Paths = {
    pages: {
        home:{
            path: {
                routePath:'',
                i18n:'Home',
                linkPath: '/',
            },
        },
        movies: {
            path: {
                routePath: 'movies',
                i18n: 'Movies page',
                linkPath:'/movies',
            },
            children: {
                list:{
                    path: {
                        routePath:'',
                        i18n:'Movies List',
                    }
                },
                detail: {
                    path: {
                        routePath: 'detail/:id',
                        linkPath:'/movies/detail',
                        i18n: 'Find Out More'
                    }
                }
            }

        },
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