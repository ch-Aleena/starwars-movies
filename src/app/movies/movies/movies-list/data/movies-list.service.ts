import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments';
import { Films } from '../model/movies-list';
import { Characterlist } from '../model/character-list';

@Injectable({
  providedIn: 'root',
})
export class MoviesListService {
  constructor(private http: HttpClient) {}

  //api url for movies
  private ApiUrl = 'films';
  baseUrl = environment.API_BASE_URL;

  //retrieves movies from api call
  getMoviesList() {
    return this.http.get<Films>(this.baseUrl + this.ApiUrl);
  }
}
