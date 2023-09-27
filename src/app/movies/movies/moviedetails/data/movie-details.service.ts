import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments';
import { FilmsDetails } from '../model/films-details';
import { Characterlist } from '../../movies-list/model/character-list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieDetailsService {
  constructor(private http: HttpClient) {}
  //api url for movie details
  private ApiUrl = 'films/';
  private baseUrl = environment.API_BASE_URL;

  /**
     get movie details from api call
   * @returns movie details 
   */

  getMovieDetails(movie_id): Observable<FilmsDetails> {
    return this.http.get<FilmsDetails>(this.baseUrl + this.ApiUrl + movie_id);
  }

  /**
    return list of characters based on urls
   * @returns characters from api call
   */

  getCharacter(url): Observable<Characterlist> {
    return this.http.get<Characterlist>(url);
  }
}
