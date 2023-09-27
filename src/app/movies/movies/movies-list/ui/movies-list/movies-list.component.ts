import { Component } from '@angular/core';
import { MoviesListService } from '../../data/movies-list.service';
import { Films } from '../../model/movies-list';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilityService } from 'src/app/shared/data/utility.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesListComponent implements OnInit {
  //observable to hold data of movies
  moviesList$: Observable<Films>;

  constructor(
    private readonly moviesData: MoviesListService,
    private readonly utility: UtilityService,
    private readonly route: Router
  ) {}

  ngOnInit(): void {
    this.moviesList$ = this.moviesData.getMoviesList();
  }

  //navigate to movie's detail page
  goMoviesDetails(url: string) {
    const id = this.utility.extractIdbyUrl(url);
    this.route.navigate([`movies/moviesdetails/${id}`]);
  }
}
