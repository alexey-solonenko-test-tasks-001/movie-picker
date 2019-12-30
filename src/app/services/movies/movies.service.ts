import { Injectable } from '@angular/core';
import { paths } from 'src/app/mocks/paths/paths';
import { QueryUrlBuilder } from 'src/app/service-interfaces/query-url-builder';
import { Location } from '@angular/common';
import { LiveSearchService } from '../live-search/live-search.service';
import { ImagesGridService } from '../images-grid/images-grid.service';
import { ImagesGridComponent } from 'src/app/comps/grids/images-grid/images-grid/images-grid.component';
import { LiveSearchComponent } from 'src/app/comps/live-search/live-search/live-search.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgSelectComponent } from '@ng-select/ng-select';

@Injectable({
  providedIn: 'root'
})
export class MoviesService implements QueryUrlBuilder {

  /* components to collect data from to build queries */
  private imagesGridComponent: ImagesGridComponent;
  private liveSearchComponent: LiveSearchComponent;
  private ngSelectComponent: NgSelectComponent;

  private imgHost: string = 'http://apitest.tab4lioz.beget.tech/movies/';
  private imagesGridId: string = 'movies-images-grid';
  private liveSearchId: string = 'movies-live-search';
  private liveSearchApiUrl: string = '';
  private moviesApiUrl: string = '';


  constructor(
    private location: Location,
    private http: HttpClient,
  ) {
    this.moviesApiUrl = paths.api.getMovies.linkPath;
    this.liveSearchApiUrl = paths.api.searchMovies.linkPath;
  }

  getQueryURL(callee: string, callType: string = '') {
    if (this.liveSearchComponent && this.liveSearchComponent.term && !this.liveSearchComponent.term.trim()) {
      return
    }
    let urlPath = this.moviesApiUrl;
    let orig = '';
    if (window && window.location) {
      orig = window.location.origin;
    } else {
      urlPath = new Array(this.location.path().split('/').length).fill('../').join('') + urlPath;
    }
    let url = new URL(urlPath, orig);
    if (this.liveSearchComponent && this.liveSearchComponent.term && this.liveSearchComponent.term.trim()) {
      url.searchParams.append('name', this.liveSearchComponent.term);
    }

    if (this.ngSelectComponent && this.ngSelectComponent.selectedItems.length > 0) {
      let genres = this.ngSelectComponent.selectedItems.map(i => i.value);
      url.searchParams.append('genres', genres.join('|'));
    }
    console.log(url.toString());
    switch (callee) {
      case LiveSearchService.name:
        break;
      case ImagesGridService.name:
        url.searchParams.append('genres', 'action|thriller');
        //url.searchParams.append('genres','crime');
        //url.searchParams.append('genres','drama');
        break;
      default:
        break;
    }

    return url;
  }

  getImagesGridId(): string {
    return this.imagesGridId;
  }
  getImgHost(): string {
    return this.imgHost;
  }
  getLiveSearchId(): string {
    return this.liveSearchId;
  }
  getMoviesApiUrl(): string {
    return this.moviesApiUrl;
  }
  getLiveSearchApiUrl(): string {
    return this.liveSearchApiUrl;
  }

  setImagesGrid(grid: ImagesGridComponent): void {
    this.imagesGridComponent = grid;
  }

  setLiveSearch(search: LiveSearchComponent): void {
    this.liveSearchComponent = search;
  }

  setNgSelectComponent(sel: NgSelectComponent): void {
    this.ngSelectComponent = sel;
  }

  getGenres(): Observable<string[]> {
    let url = paths.api.getGenres.linkPath;
    return this.http.get<string[]>(url);
  }

}
