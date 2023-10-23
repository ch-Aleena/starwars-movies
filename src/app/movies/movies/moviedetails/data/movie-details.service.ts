import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments';
import { FilmsDetails } from '../model/films-details';
import { Characterlist } from '../../movies-list/model/character-list';
import {
  Observable,
  concatMap,
  flatMap,
  forkJoin,
  map,
  mergeMap,
  of,
  switchMap,
} from 'rxjs';
import { Films } from '../../movies-list/model/movies-list';
import { characterDetails } from 'src/app/characters/characters/model/characterdetails';

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

  getMovieDetailss(movie_id): Observable<FilmsDetails> {
    return this.http
      .get<FilmsDetails>(this.baseUrl + this.ApiUrl + movie_id)
      .pipe(
        flatMap((films: FilmsDetails) => {
          const characterurl: string[] =
            films.result.properties.characters.slice(0, 10);
          const characterrequests: Observable<characterDetails>[] =
            characterurl.map((url) => {
              return this.http.get<characterDetails>(url);
            });

          return forkJoin(characterrequests).pipe(
            map((characters: (characterDetails | null)[]) => {
              const moviedetails: FilmsDetails = { ...films, ...characters };
              return moviedetails;
            })
          );
        })
      );
  }

  /**
    return list of characters based on urls
   * @returns characters from api call
   */

  getCharacter(url): Observable<Characterlist> {
    return this.http.get<Characterlist>(url);
  }
}
