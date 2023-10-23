import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Films } from '../../../movies-list/model/movies-list';
import { FilmsDetails } from '../../model/films-details';
import { characterFilter } from '../../../movies-list/model/character-list';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieComponent {
  /**
   * variables to store data from movieDetails
   */
  @Input() movieDetail: FilmsDetails;
  @Input() characterlist: characterFilter[];

  //to display characters in template

  /**
   * envet emiiter for movieDetails
   */
  @Output() character = new EventEmitter<string>();
  @Output() movie = new EventEmitter();

  ngOnInit(): void {
    console.log(this.movieDetail);
  }

  /**
   * emits an event to movieDetails
   */
  backToMovies() {
    this.movie.emit();
  }

  /**
   * emits an event to movieDetails
   * @param id character id
   */
  chacracterDetails(id) {
    this.character.emit(id);
  }
}
