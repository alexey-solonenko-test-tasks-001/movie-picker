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
    if (conf.updater) {
      conf.updater.updateTerm(conf.queryBuilderClientId, term);
    }
    let url = conf.queryBuilder.getQueryURL(this.constructor.name, conf.queryBuilderClientId);

    return this.http.get<LiveSearchItem[]>(url.toString());
  }

  addConfig(id: string, conf: LiveSearchConfig) {
    this.configs.set(id, conf);
  }

  getConfig(id: string): LiveSearchConfig {
    if (this.configs.has(id)) return this.configs.get(id);
    else return { followUpUrl: '' };
  }

}
