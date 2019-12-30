/* Vendor */
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

/* In-app */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryDataService } from './mocks/in-memory-data-service/in-memory-data-service';
import { MoviePickerHomeComponent } from './comps/movie-picker/movie-picker-home/movie-picker-home/movie-picker-home.component';
import { MoviePickerDetailsComponent } from './comps/movie-picker/movie-picker-details/movie-picker-details/movie-picker-details.component';
import { ImagesGridComponent } from './comps/grids/images-grid/images-grid/images-grid.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SingleThumbComponent } from './comps/grids/images-grid/single-thumb/single-thumb/single-thumb.component';
import { environment } from 'src/environments/environment';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { MoviePickerThumbAnnexComponent } from './comps/movie-picker/movie-picker-thumb-annex/movie-picker-thumb-annex.component';
import { ImgGridThumbAnnexDirective } from './comps/grids/images-grid/single-thumb/single-thumb/img-grid-thumb-annex.directive';
import { LiveSearchComponent } from './comps/live-search/live-search/live-search.component';
import { MoviePickerGenresComponent } from './comps/movie-picker/movie-picker-genres/movie-picker-genres/movie-picker-genres.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MoviePickerHomeComponent,
    MoviePickerDetailsComponent,
    ImagesGridComponent,
    SingleThumbComponent,
    MoviesPageComponent,
    MoviePickerThumbAnnexComponent,
    ImgGridThumbAnnexDirective,
    LiveSearchComponent,
    MoviePickerGenresComponent,
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // environment.production ? HttpClientInMemoryWebApiModule.forRoot(MoviesDataService, { delay: 400}) : [],
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000, dataEncapsulation: false}),
    NgSelectModule,
    
  ],
  entryComponents:[MoviePickerThumbAnnexComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
