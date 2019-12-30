import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ApiRes } from '../../models/api/api.res.model';
import { moviesMockData } from './mocks-data/movies-mock-data';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb(): ApiRes {
    /* to provide the list of genres */
    return ({
      movies: moviesMockData,
      genres: (() => {
        let allGenres = [];
        moviesMockData.forEach(m => {
          if (m.genres && Array.isArray(m.genres)) {
            allGenres = allGenres.concat(m.genres);
          }
        });
        /* return only distinct/unque genres */
        return (Array.from(new Set(allGenres)));
      })(),
    });
  }
  /*
  https://angular.io/tutorial/toh-pt6#simulate-a-data-server
  */
  genId(req: ApiRes): number {
    return req.movies.length > 0 ? Math.max(...req.movies.map(movie => movie.id)) + 1 : 1;
  }
}


