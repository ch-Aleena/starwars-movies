import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieDetailsService } from '../../data/movie-details.service';
import { FilmsDetails } from '../../model/films-details';
import { Observable } from 'rxjs';
import { Characterlist } from '../../../movies-list/model/character-list';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css'],
})
export class MoviesDetailsComponent implements OnInit {
  constructor(
    private activeRoute: ActivatedRoute,
    private _moviesDetails: MovieDetailsService
  ) {}

  movieDetails: FilmsDetails;
  character$: Characterlist;
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params: Params) => {
      let _id = parseInt(params['get']('id'));
      this.getMovieDetails(_id);
    });
  }

  // api call for movie details
  getMovieDetails(_id) {
    this._moviesDetails.getMovieDetails(_id).subscribe((res) => {
      console.log(res);
      this.movieDetails = JSON.parse(JSON.stringify(res));
      console.log('message' + this.movieDetails);
    });
  }

  //get characters of movie
  getCharacters() {
    if (this.movieDetails) {
      for (
        let i = 0;
        i < this.movieDetails.result.properties.characters.length;
        i++
      ) {
        this._moviesDetails
          .getCharacter(this.movieDetails.result.properties.characters[i])
          .subscribe((res) => {
            this.character$ = res;
            console.log(this.character$);
          });
      }
    }
  }
}
