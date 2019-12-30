import { Injectable } from '@angular/core';
import { LiveSearchConfig } from './live-search-types';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LiveSearchItem } from 'src/app/models/app/comps/live.search.item';

@Injectable({
  providedIn: 'root'
})
export class LiveSearchService {

  configs: Map<string, LiveSearchConfig> = new Map();


  constructor(
    private http: HttpClient
  ) { }

  searchItems(term: string, confId: string): Observable<LiveSearchItem[]> {
    if (!term.trim()) {
      return of([]);
    }
    let conf = this.getConfig(confId);
    if (!conf) return of([]);
    let url = conf.queryBuilder.getQueryURL(this.constructor.name);
    
    return this.http.get<LiveSearchItem[]>(url.toString());
  }

  /* TODO to redo with an abstract and generics? */
  addConfig(id: string, conf: LiveSearchConfig) {
    this.configs.set(id, conf);
  }

  getConfig(id: string): LiveSearchConfig {
    if (this.configs.has(id)) return this.configs.get(id);
    /* TODO to setup typescript to allow multiple return types */
    else return { followUpUrl: '' };
  }

}
