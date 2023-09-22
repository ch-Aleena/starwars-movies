import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MovieDetailsService } from '../../data/movie-details.service';
import { FilmsDetails } from '../../model/films-details';
import { Observable } from 'rxjs';
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

  constructor(
    private readonly activeRoute: ActivatedRoute,
    private readonly _moviesDetails: MovieDetailsService,
    private readonly location: Location,
    private readonly route: Router
  ) {}

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
      this.getCharacters();
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
            const newcharacter = {
              char: res.result.properties.name,
              _id: res.result.uid,
            };
            console.log(newcharacter);
            this.character.push(newcharacter);
          });
      }
    }
  }

  //navigate to character details page
  chacracterDetails(id) {
    this.route.navigate([`movies/characters/character/${id}`]);
  }

  backToMovies() {
    this.location.back();
  }
}
