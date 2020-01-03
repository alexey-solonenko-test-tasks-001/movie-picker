import { paths } from '../mocks/paths/paths';
import { Routes } from '@angular/router';
import { MoviePickerDetailsComponent } from '../comps/movie-picker/movie-picker-details/movie-picker-details/movie-picker-details.component';
import { MoviesPageComponent } from '../pages/movies-page/movies-page.component';
import { SingleThumbComponent } from '../comps/grids/images-grid/single-thumb/single-thumb/single-thumb.component';
import { AppComponent } from '../app.component';
import { MoviePickerHomeComponent } from '../comps/movie-picker/movie-picker-home/movie-picker-home/movie-picker-home.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';

/* TODO to redo in an HTTP call to a server */
export const routes: Routes = [
    {
        path: paths.pages.home.path.routePath, 
        //redirectTo: paths.pages.moviesHome.path.routePath, 
        //pathMatch: 'full',
        component: HomePageComponent,
        children:[
            {
                path: paths.pages.movies.path.routePath,
                component: MoviesPageComponent,
                children: [
                    {
                        path: '', 
                        component: MoviePickerHomeComponent,
                    },
                    {
                        path: paths.pages.movies.children.detail.path.routePath,
                        component: MoviePickerDetailsComponent,
                    },
                ]
            }
        ]
    },

    // {
    //     path: paths.pages.moviesHome.path.routePath, 
    //     component: MoviesPageComponent,
    // },
    // {
    //     path: paths.pages.moviesHome.path.routePath, 
    //     component: SingleThumbComponent,
    // },
    // {
    //     path: paths.pages.moviesSingleMovie.path.routePath, 
    //     component: MoviePickerDetailsComponent,
    // },
];
