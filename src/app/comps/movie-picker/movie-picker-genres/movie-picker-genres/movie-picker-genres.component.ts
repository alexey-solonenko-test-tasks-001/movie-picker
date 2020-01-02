import { Component, OnInit, Input } from '@angular/core';
import { NgSelectComponent } from '@ng-select/ng-select';
import { NgSelectOption } from '@angular/forms';
import { NgOptionComponent } from '@ng-select/ng-select/lib/ng-option.component';
import { MoviesService } from 'src/app/services/movies/movies.service';


@Component({
  selector: 'app-movie-picker-genres',
  templateUrl: './movie-picker-genres.component.html',
  styleUrls: ['./movie-picker-genres.component.scss']
})
export class MoviePickerGenresComponent implements OnInit {

  @Input() genres = [];
  @Input() moviesDataId: string;  
  selectorDisabled = true;
  @Input() selectedGenres: string[];

  constructor(
    private moviesService: MoviesService,
  ) { }

  ngOnInit() {
    this.getGenres();
  }

  getGenres(): void {
    this.selectorDisabled = true;
    this.moviesService.getGenres().subscribe(
      genres => {
        if (genres) {
          this.genres = genres.sort((a, b) => a.localeCompare(b));
          this.selectorDisabled = false;
        }
      }
    );
  }

  updateGenres(genres){
    this.moviesService.updateGenres(this.moviesDataId,genres);
  }

}
