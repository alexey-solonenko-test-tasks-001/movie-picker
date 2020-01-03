import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/app/movies/movie.model';
import { ThumbAnnex } from '../../grids/images-grid/single-thumb/single-thumb/thumb-annex';
import { Location } from '@angular/common';
import { paths } from '../../../mocks/paths/paths';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { ImagesGridService } from 'src/app/services/images-grid/images-grid.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-movie-picker-thumb-annex',
  templateUrl: './movie-picker-thumb-annex.component.html',
  styleUrls: ['./movie-picker-thumb-annex.component.scss']
})
export class MoviePickerThumbAnnexComponent implements OnInit, ThumbAnnex {

  @Input() thumb: Movie;
  @Input() compId: string;
  genresDispatcher: Subject<string[]>;

  constructor(
    private imagesGridService: ImagesGridService,
    private moviesService: MoviesService,
    private router: Router,
  ) { }

  ngOnInit() {
    if (this.compId && this.imagesGridService.getConfig(this.compId)) {
      let moviesDataId = this.imagesGridService.getConfig(this.compId).queryBuilderClientId;
      this.genresDispatcher = this.moviesService.getMoviesData(moviesDataId).genresDispatcher;
    }
  }

  goToList(genre: string): void {
    if (window.location.pathname === paths.pages.movies.path.linkPath) {
      this.genresDispatcher.next([genre]);
    } else {
      this.router.navigate([paths.pages.movies.path.linkPath], { queryParams: { genre: genre } });
    }
  }


}
