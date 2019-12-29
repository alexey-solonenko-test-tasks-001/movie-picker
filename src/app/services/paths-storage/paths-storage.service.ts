import { Injectable } from '@angular/core';
import { Paths } from 'src/app/mocks/paths/path-type';
/* todo to redo to load from server */
import { paths } from 'src/app/mocks/paths/paths';

@Injectable({
  providedIn: 'root'
})
export class PathsStorageService {

  private paths: Paths = paths;
  constructor() { }

  getPaths():Paths{
    return this.paths;
  }

}
