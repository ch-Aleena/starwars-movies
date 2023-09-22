import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments';
import { characterDetails } from '../model/characterdetails';

@Injectable({
  providedIn: 'root',
})
export class CharacterdetailsService {
  //api url for character details
  private characterUrl = 'people/';
  private baseUrl = environment.API_BASE_URL;

  constructor(private http: HttpClient) {}

  //get character details
  getCharacterDetails(id) {
    return this.http.get<characterDetails>(
      this.baseUrl + this.characterUrl + id
    );
  }
}
