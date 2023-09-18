import { ChangeDetectionStrategy, Component } from '@angular/core';

export class Users {
  name!: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
