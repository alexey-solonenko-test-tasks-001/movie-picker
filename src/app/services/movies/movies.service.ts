import { Injectable } from '@angular/core';
import { paths } from 'src/app/mocks/paths/paths';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private imgHost: string = 'http://apitest.tab4lioz.beget.tech/movies/';
  private imagesGridId: string = 'movies-images-grid';
  private liveSearchId: string = 'movies-live-search';
  private liveSearchApiUrl: string = '';
  private moviesApiUrl: string = '';

  constructor() {
    this.moviesApiUrl = paths.api.getMovies.linkPath;
    this.liveSearchApiUrl = paths.api.searchMovies.linkPath;
   }

  getImagesGridId(): string {
    return this.imagesGridId;
  }
  getImgHost(): string {
    return this.imgHost;
  }
  getLiveSearchId():string{
    return this.liveSearchId;
  }
  getMoviesApiUrl(): string {
    return this.moviesApiUrl;
  }
  getLiveSearchApiUrl():string {
    return this.liveSearchApiUrl;
  }



}
