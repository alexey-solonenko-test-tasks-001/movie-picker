import { Injectable } from '@angular/core';
import { paths } from 'src/app/mocks/paths/paths';
import { QueryUrlBuilder } from 'src/app/service-interfaces/query-url-builder';
import { Location } from '@angular/common';
import { LiveSearchService } from '../live-search/live-search.service';
import { ImagesGridService } from '../images-grid/images-grid.service';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { MoviesServiceComponentData } from './movies-service-types';

@Injectable({
  providedIn: 'root'
})
export class MoviesService implements QueryUrlBuilder {

  private genresPusher: Subject<string[]>;
  private moviesApiUrl: string = '';
  private moviesData: Map<string, MoviesServiceComponentData> = new Map();


  constructor(
    private location: Location,
    private http: HttpClient,
  ) {
    this.moviesApiUrl = paths.api.getMovies.linkPath;
  }

  getQueryURL(callee: string, moviesCompId: string, callType?: string) {
    if (!callee || !moviesCompId || !this.getMoviesData(moviesCompId)) return;
    let moviesData = this.getMoviesData(moviesCompId);

    /* (1) Resolve URL origin */
    let urlPath = this.moviesApiUrl;
    let orig = '';
    if (window && window.location) {
      orig = window.location.origin;
    } else {
      urlPath = new Array(this.location.path().split('/').length).fill('../').join('') + urlPath;
    }
    let url = new URL(urlPath, orig);

    /* (2) Add seach term to the query string */
    if (moviesData.term) {
      url.searchParams.append('name', moviesData.term);
    }

    console.log(url.toString());
    switch (callee) {
      case LiveSearchService.name:
        break;
      case ImagesGridService.name:
        if (moviesData.genres && moviesData.genres.length > 0) {
          url.searchParams.append('genres', moviesData.genres.join('|'));
        }
        break;
      default:
        break;
    }

    return url;
  }

  getGenres(): Observable<string[]> {
    let url = paths.api.getGenres.linkPath;
    return this.http.get<string[]>(url);
  }

  initMoviesData(moviesCompId: string): void {
    if (!this.getMoviesData(moviesCompId)) {
      this.moviesData.set(moviesCompId, {});
      this.moviesData.get(moviesCompId).genresDispatcher = new Subject<string[]>();
      this.moviesData.get(moviesCompId).listReloader = new Subject<boolean>();
    }
  }

  getMoviesData(moviesCompId: string): MoviesServiceComponentData {
    if (this.moviesData.get(moviesCompId)) return this.moviesData.get(moviesCompId);
    return null;
  }

  updateGenres(clientId: string, data: string[]) {
    if (this.getMoviesData(clientId)) {
      this.getMoviesData(clientId).genres = data;
    }
  }

  pushGenres(clientId: string, data: string[]):void{
    if (this.getMoviesData(clientId)) {
      let data = this.getMoviesData(clientId);

    }
  }

  updateTerm(clientId: string, term: string) {
    if (this.getMoviesData(clientId)) {
      this.getMoviesData(clientId).term = term;
    }
  }

}
