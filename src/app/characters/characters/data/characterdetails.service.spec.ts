import { TestBed } from '@angular/core/testing';

import { CharacterdetailsService } from './characterdetails.service';

describe('CharacterdetailsService', () => {
  let service: CharacterdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
