import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/app/movies/movie.model';
import { ThumbAnnex } from '../../grids/images-grid/single-thumb/single-thumb/thumb-annex';

@Component({
  selector: 'app-movie-picker-thumb-annex',
  templateUrl: './movie-picker-thumb-annex.component.html',
  styleUrls: ['./movie-picker-thumb-annex.component.scss']
})
export class MoviePickerThumbAnnexComponent implements OnInit, ThumbAnnex {

  @Input() thumb: Movie;
  
  constructor() { }

  ngOnInit() {
  }

}
