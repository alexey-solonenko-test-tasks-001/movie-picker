import { Component, OnInit } from '@angular/core';
import { ImagesGridService } from 'src/app/services/images-grid/images-grid.service';
import { MoviePickerThumbAnnexComponent } from '../../movie-picker-thumb-annex/movie-picker-thumb-annex.component';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { paths } from 'src/app/mocks/paths/paths';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LiveSearchService } from 'src/app/services/live-search/live-search.service';
import { moviesMockData } from 'src/app/mocks/in-memory-data-service/mocks-data/movies-mock-data';

@Component({
  selector: 'app-movie-picker-home',
  templateUrl: './movie-picker-home.component.html',
  styleUrls: ['./movie-picker-home.component.sass']
})
export class MoviePickerHomeComponent implements OnInit {

  imagesGridId: string = '';
  liveSearchid: string = '';

  constructor(
    private imagesGridService: ImagesGridService,
    private liveSearchService: LiveSearchService,
    private locationService: Location,
    private moviesService: MoviesService,
  ) {
    this.imagesGridId = moviesService.getImagesGridId();
    this.liveSearchid = moviesService.getLiveSearchId();

    let detailsUrl = paths.pages.moviesSingleMovie.path.linkPath;

    this.imagesGridService.addConfig(moviesService.getImagesGridId(), {
      annexTemplate: MoviePickerThumbAnnexComponent,
      detailsUrl: detailsUrl,
      imgHostUrl: moviesService.getImgHost(),
      thumbsUrl: moviesService.getMoviesApiUrl(),
    });

    this.liveSearchService.addConfig(moviesService.getLiveSearchId(),{
      apiUrl:moviesService.getLiveSearchApiUrl(),
      detailUrl: detailsUrl,
    })

  }

  ngOnInit() {

  }

}
