import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './ui/character/character.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const route: Routes = [
  {
    path: 'character/:id',
    component: CharacterComponent,
  },
];

@NgModule({
  declarations: [CharacterComponent],
  imports: [CommonModule, RouterModule.forChild(route), HttpClientModule],
})
export class CharactersModule {}
