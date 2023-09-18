import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/ui/movies-list/movies-list.component';
import { MoviesDetailsComponent } from './moviedetails/ui/movies-details/movies-details.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutesModule } from './routes/routes.module';

@NgModule({
  declarations: [MoviesListComponent, MoviesDetailsComponent],
  imports: [CommonModule, HttpClientModule, RoutesModule],
})
export class MoviesModule {}
