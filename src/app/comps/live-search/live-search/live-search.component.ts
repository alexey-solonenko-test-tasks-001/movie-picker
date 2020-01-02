import { Component, OnInit, Input } from '@angular/core';
import { LiveSearchItem } from 'src/app/models/app/comps/live.search.item';
import { LiveSearchService } from 'src/app/services/live-search/live-search.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-live-search',
  templateUrl: './live-search.component.html',
  styleUrls: ['./live-search.component.scss']
})
export class LiveSearchComponent implements OnInit {

  @Input() compId:string;
  items:Array<LiveSearchItem>;
  private searchTerms= new Subject<string>();

  constructor(
    private liveSearchService:  LiveSearchService
  ) { }

    search(term: string):void{
      let conf = this.liveSearchService.getConfig(this.compId);
      conf.updater.updateTerm(conf.queryBuilderClientId,term);
      this.searchTerms.next(term);
    }

  ngOnInit():void {
    this.searchTerms.pipe(
        debounceTime(300),
       distinctUntilChanged(),
       switchMap((term:string) => this.liveSearchService.searchItems(term,this.compId)) 
    ).subscribe(items => {
        this.items = items;
        let conf = this.liveSearchService.getConfig(this.compId);
        this.items.forEach((item, idx) => {
          this.items[idx].link = conf.followUpUrl + '/' + item.id;
        });
    });
  }

}
