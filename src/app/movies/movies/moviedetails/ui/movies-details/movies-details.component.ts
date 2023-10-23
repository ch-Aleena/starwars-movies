import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MovieDetailsService } from '../../data/movie-details.service';
import { FilmsDetails } from '../../model/films-details';
import { Observable, Subscription } from 'rxjs';
import {
  Characterlist,
  characterFilter,
} from '../../../movies-list/model/character-list';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css'],
})
export class MoviesDetailsComponent implements OnInit {
  //varaible to hold the movie data
  movieDetails$: Observable<FilmsDetails>;

  //an array to store name and id of each character
  character: characterFilter[] = [];

  //a Subscription array to store subscriptions
  subscriptions: Subscription[] = [];

  constructor(
    private readonly activeRoute: ActivatedRoute,
    private readonly _moviesDetails: MovieDetailsService,
    private readonly location: Location,
    private readonly route: Router,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.activeRoute.paramMap.subscribe((params: Params) => {
        let _id = parseInt(params['get']('id'));
        this.getMovieDetails(_id);
      })
    );
  }

  // api call for movie details
  getMovieDetails(_id) {
    this.movieDetails$ = this._moviesDetails.getMovieDetailss(_id);
    console.log(this.movieDetails$);
  }

  /**
   * get characters of movie
   */

  //navigate to character details page
  chacracterDetails(id) {
    this.route.navigate([`movies/characters/character/${id}`]);
  }

  /**
   * go back to movie details page
   */
  goBack() {
    this.location.back();
  }

  /**
   * unsubscribe from all subscriptions
   */
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}
