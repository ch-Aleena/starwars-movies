import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/ui/movies-list/movies-list.component';
import { MoviesDetailsComponent } from './moviedetails/ui/movies-details/movies-details.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutesModule } from './routes/routes.module';
import { MovieComponent } from './moviedetails/ui/movie/movie.component';

@NgModule({
  declarations: [MoviesListComponent, MoviesDetailsComponent, MovieComponent],
  imports: [CommonModule, HttpClientModule, RoutesModule],
})
export class MoviesModule {}
