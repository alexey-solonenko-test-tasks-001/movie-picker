import { Component, OnInit } from '@angular/core';
import { ImagesGridService } from 'src/app/services/images-grid/images-grid.service';
import { Movie } from 'src/app/models/app/movies/movie.model';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-movie-picker-details',
  templateUrl: './movie-picker-details.component.html',
  styleUrls: ['./movie-picker-details.component.scss']
})
export class MoviePickerDetailsComponent implements OnInit {

  movie: Movie;
  loadingData: boolean=false;
  loadingImg: boolean= false;

  constructor(
    private imagesGridService: ImagesGridService,
    private moviesService: MoviesService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

  }

  getMovie(): void {
    this.loadingData = true;
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.imagesGridService.getThumb(this.moviesService.getImagesGridId(),id).subscribe(movie => {
      this.movie = movie;
      this.loadingData = false;
    });
  }
}