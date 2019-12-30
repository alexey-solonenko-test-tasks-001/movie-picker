import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ImagesGridService } from 'src/app/services/images-grid/images-grid.service';
import { MoviePickerThumbAnnexComponent } from '../../movie-picker-thumb-annex/movie-picker-thumb-annex.component';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { paths } from 'src/app/mocks/paths/paths';
import { Location } from '@angular/common';
import { LiveSearchService } from 'src/app/services/live-search/live-search.service';
import { ImagesGridComponent } from 'src/app/comps/grids/images-grid/images-grid/images-grid.component';
import { LiveSearchComponent } from 'src/app/comps/live-search/live-search/live-search.component';
import { NgSelectComponent } from '@ng-select/ng-select';
import { NgSelectOption } from '@angular/forms';
import { NgOptionComponent } from '@ng-select/ng-select/lib/ng-option.component';

@Component({
  selector: 'app-movie-picker-home',
  templateUrl: './movie-picker-home.component.html',
  styleUrls: ['./movie-picker-home.component.scss']
})
export class MoviePickerHomeComponent implements OnInit, AfterViewInit {

  /* Ids of the reusable shared components we are going to plug into our movie picker */
  imagesGridId: string;
  liveSearchid: string;
  /* References to instances of reusable shared components rendered with this particular instance of a movie-picker */
  @ViewChild(ImagesGridComponent,{static:true}) imagesGridComp: ImagesGridComponent;
  @ViewChild(LiveSearchComponent,{static:true}) liveSearchComp: LiveSearchComponent;
  @ViewChild('genresSelector',{static:false}) genresSelector: NgSelectComponent;

  genres = [];
  selectedGenres:string[]  = [];

  constructor(
    private imagesGridService: ImagesGridService,
    private liveSearchService: LiveSearchService,
    private locationService: Location,
    private moviesService: MoviesService,
  ) {
    /* obtain IDs from the service */
    /** @todo service should generate multiple ID and keep their stack */ 
    this.imagesGridId = moviesService.getImagesGridId();
    this.liveSearchid = moviesService.getLiveSearchId();


    let detailsUrl = paths.pages.moviesSingleMovie.path.linkPath;

    /* Initialize config for a grid service */
    this.imagesGridService.addConfig(this.imagesGridId, {
      annexType: MoviePickerThumbAnnexComponent,
      detailsUrl: detailsUrl,
      imgHostUrl: moviesService.getImgHost(),
      thumbsUrl: moviesService.getMoviesApiUrl(),
      queryBuilder: this.moviesService,
    });

    /* Initialize config for live search service */
    this.liveSearchService.addConfig(this.liveSearchid, {
      followUpUrl: detailsUrl,
      queryBuilder: this.moviesService,
    });

  }

  ngOnInit() {

  }

  ngAfterViewInit(){
    /* Pass rendered instances of child components to the service  */
    this.moviesService.setImagesGrid(this.imagesGridComp);
    this.moviesService.setLiveSearch(this.liveSearchComp);
    this.moviesService.setNgSelectComponent(this.genresSelector);
    this.getGenres();
  }

  search():void{
    if(this.imagesGridComp){
      this.imagesGridComp.getThumbs();
    }
  }

  getGenres():void{
    this.moviesService.getGenres().subscribe(
      genres => {
        if (genres) {
        this.genres = genres.sort((a,b) => a.localeCompare(b));
        this.genresSelector.setDisabledState(false);
        } 
      }
    );
  }

}
