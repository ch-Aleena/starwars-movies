import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { MoviesDetailsComponent } from '../moviedetails/ui/movies-details/movies-details.component';
import { MoviesListComponent } from '../movies-list/ui/movies-list/movies-list.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesListComponent,
  },
  {
    path: 'movieslist',
    component: MoviesListComponent,
  },
  {
    path: 'moviesdetails/:id',
    component: MoviesDetailsComponent,
  },
  {
    path: 'characters',
    loadChildren: () =>
      import('src/app/characters/characters/characters.module').then(
        (m) => m.CharactersModule
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class RoutesModule {}
