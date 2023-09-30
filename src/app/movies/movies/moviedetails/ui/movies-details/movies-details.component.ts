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
  movieDetails: FilmsDetails;

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
    this.subscriptions.push(
      this._moviesDetails.getMovieDetails(_id).subscribe((res) => {
        this.movieDetails = res;
        console.log(this.movieDetails);
        this.getCharacters();
      })
    );
  }

  /**
   * get characters of movie
   */
  getCharacters() {
    if (this.movieDetails) {
      for (
        let i = 0;
        i < this.movieDetails.result.properties.characters.length;
        i++
      ) {
        this.subscriptions.push(
          this._moviesDetails
            .getCharacter(this.movieDetails.result.properties.characters[i])
            .subscribe((res) => {
              const newcharacter = {
                char: res.result.properties.name,
                _id: res.result.uid,
              };

              const newdata = [...this.character];
              newdata.push(newcharacter);
              this.character = newdata;
            })
        );
      }
    }
  }

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
