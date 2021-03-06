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

  getThumbs(compId: string): Observable<Array<ImgThumbModel>> {
    let conf = this.getConfig(compId);
    if(!conf) return of(null);
    let url = conf.queryBuilder.getQueryURL(this.constructor.name, conf.queryBuilderClientId);

    return this.http.get<ImgThumbModel[]>(url.toString());
  }
  
  getThumb(confId: string, thumbId: number): Observable<ImgThumbModel>{
      if(!this.configs.has(confId)) return of(null);
      let conf = this.configs.get(confId);
      let url = conf.queryBuilder.getQueryURL(this.constructor.name, conf.queryBuilderClientId).toString();
      url +=  '/' + thumbId;
      return this.http.get<ImgThumbModel>(url);
  }

  addConfig(id: string, conf: ImagesGridConfig) {
    this.configs.set(id, conf);
  }

  getConfig(id: string): ImagesGridConfig {
    if (this.configs.has(id)) return this.configs.get(id);
    else return {};
  }

}
