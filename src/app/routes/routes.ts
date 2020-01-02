import { paths } from '../mocks/paths/paths';
import { Routes } from '@angular/router';
import { MoviePickerDetailsComponent } from '../comps/movie-picker/movie-picker-details/movie-picker-details/movie-picker-details.component';
import { MoviesPageComponent } from '../pages/movies-page/movies-page.component';
import { SingleThumbComponent } from '../comps/grids/images-grid/single-thumb/single-thumb/single-thumb.component';

/* TODO to redo in an HTTP call to a server */
export const routes: Routes = [
    {
        path: '', 
        redirectTo: paths.pages.moviesHome.path.routePath, 
        pathMatch: 'full',
    },
    {
        path: paths.pages.moviesHome.path.routePath, 
        component: MoviesPageComponent,
    },
    {
        path: paths.pages.moviesHome.path.routePath, 
        component: SingleThumbComponent,
    },
    {
        path: paths.pages.moviesSingleMovie.path.routePath, 
        component: MoviePickerDetailsComponent,
    },
];
