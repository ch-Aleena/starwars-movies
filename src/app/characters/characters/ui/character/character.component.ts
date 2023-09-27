import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { characterDetails } from '../../model/characterdetails';
import { CharacterdetailsService } from '../../data/characterdetails.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterComponent implements OnInit {
  //observable to store character details
  characterDetails$: Observable<characterDetails>;

  //variable to store subscription
  private subscription: Subscription;

  constructor(
    private readonly char_details: CharacterdetailsService,
    private readonly _location: Location,
    private readonly activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscription = this.activeRoute.paramMap.subscribe(
      (params: Params) => {
        const id = parseInt(params['get']('id'));
        if (id) {
          this.getCharacter(id);
        }
      }
    );
  }

  //method to get character details
  getCharacter(id) {
    this.characterDetails$ = this.char_details.getCharacterDetails(id);
  }

  //go back to movie details
  backToMovie(): void {
    this._location.back();
  }

  /**
   * unsubscribe the subscription
   */
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
