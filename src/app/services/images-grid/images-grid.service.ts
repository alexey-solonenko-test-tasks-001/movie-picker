import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ImgThumbModel } from 'src/app/models/app/comps/img.thumb.model';
import { HttpClient } from '@angular/common/http';
import { ImagesGridConfig } from './images-grid-types';

@Injectable({
  providedIn: 'root'
})
export class ImagesGridService {

  configs: Map<string, ImagesGridConfig> = new Map();

  constructor(private http: HttpClient) { }

  /* TODO to check if a genre filter can be added here */
  getThumbs(apiUrl: string): Observable<Array<ImgThumbModel>> {
    return this.http.get<ImgThumbModel[]>(apiUrl);
  }
  
  getThumb(confId: string, thumbId: number): Observable<ImgThumbModel>{
      if(!this.configs.has(confId)) return of(null);
      let url = this.configs.get(confId).thumbsUrl;
      url +=  '/' + thumbId;
      return this.http.get<ImgThumbModel>(url);
  }

  addConfig(id: string, conf: ImagesGridConfig) {
    this.configs.set(id, conf);
  }

  getConfig(id: string): ImagesGridConfig {
    if (this.configs.has(id)) return this.configs.get(id);
    /* TODO to setup typescript to allow multiple return types */
    else return {thumbsUrl: ''};
  }

}
