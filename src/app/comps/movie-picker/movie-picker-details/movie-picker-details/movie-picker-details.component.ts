import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/app/movies/movie.model';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { paths } from 'src/app/mocks/paths/paths';

@Component({
  selector: 'app-movie-picker-details',
  templateUrl: './movie-picker-details.component.html',
  styleUrls: ['./movie-picker-details.component.scss']
})
export class MoviePickerDetailsComponent implements OnInit {

  movie: Movie={id:-1,name:'',img:''};
  loading: boolean = true;

  constructor(
    private sanitizer: DomSanitizer,
    private http: HttpClient,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
      this.getMovie();
  }

  async getMovie() {
    this.loading = true;
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    /* TODO to user router to level-up the movies component params */
    let movie = await this.http.get<Movie>(paths.api.getMovies.linkPath + '/' + id).toPromise();
    this.movie = movie;
    let res = await this.http.get<Blob>(movie.img, { responseType: 'blob' }).toPromise();
    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
    await wait(Math.random() * 2000 + 350);
    let urlCreator = window.URL || window.webkitURL;
    let objUrl = urlCreator.createObjectURL(res);
    this.movie.img = this.sanitizer.bypassSecurityTrustUrl(objUrl);
    this.loading = false;
  }
}