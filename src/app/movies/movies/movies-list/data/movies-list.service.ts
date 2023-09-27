import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments';
import { Films } from '../model/movies-list';
import { Characterlist } from '../model/character-list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesListService {
  constructor(private http: HttpClient) {}

  //api url for movies
  private ApiUrl = 'films';
  private baseUrl = environment.API_BASE_URL;

  /**
   * retrive the all movies from api call
   * @returns list of all movies
   */
  getMoviesList(): Observable<Films> {
    return this.http.get<Films>(this.baseUrl + this.ApiUrl);
  }
}
