import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor() {}

  //extract id at given end of url
  extractIdbyUrl(URL: string): number | null {
    const matches = URL.match(/\/(\d+)\/?$/);
    if (matches && matches.length > 1) {
      const id = parseInt(matches[1]);
      if (!isNaN(id)) {
        return id;
      }
    }
    return null;
  }
}
