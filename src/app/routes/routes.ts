import { paths } from '../mocks/paths/paths';
import { Routes } from '@angular/router';
import { MoviePickerDetailsComponent } from '../comps/movie-picker/movie-picker-details/movie-picker-details/movie-picker-details.component';
import { MoviesPageComponent } from '../pages/movies-page/movies-page.component';
import { MoviePickerListComponent } from '../comps/movie-picker/movie-picker-list/movie-picker-list.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';

export const routes: Routes = [
    {
        path: paths.pages.home.path.routePath,
        component: HomePageComponent,
        children:[
            {
                path: paths.pages.movies.path.routePath,
                component: MoviesPageComponent,
                children: [
                    {
                        path: '', 
                        component: MoviePickerListComponent,
                    },
                    {
                        path: paths.pages.movies.children.detail.path.routePath,
                        component: MoviePickerDetailsComponent,
                    },
                ]
            }
        ]
    },
];
