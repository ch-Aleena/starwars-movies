import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments';
import { FilmsDetails } from '../model/films-details';
import { Characterlist } from '../../movies-list/model/character-list';

@Injectable({
  providedIn: 'root',
})
export class MovieDetailsService {
  constructor(private http: HttpClient) {}
  //api url for movie details
  private ApiUrl = 'films/';
  baseUrl = environment.API_BASE_URL;

  getMovieDetails(movie_id) {
    return this.http.get<FilmsDetails>(this.baseUrl + this.ApiUrl + movie_id);
  }
  getCharacter(url) {
    return this.http.get<Characterlist>(url);
  }
}
