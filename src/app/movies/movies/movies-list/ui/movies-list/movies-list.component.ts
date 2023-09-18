import { Component } from '@angular/core';
import { MoviesListService } from '../../data/movies-list.service';
import { Films } from '../../model/movies-list';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilityService } from 'src/app/shared/data/utility.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  constructor(
    private readonly moviesData: MoviesListService,
    private readonly utility: UtilityService,
    private readonly route: Router
  ) {}

  //varailble to hold data of movies
  moviesList$: Observable<Films>;
  prop: any;
  ngOnInit(): void {
    this.moviesList$ = this.moviesData.getMoviesList();
  }

  goMoviesDetails(url: string) {
    const id = this.utility.extractIdbyUrl(url);
    this.route.navigate([`movies/moviesdetails/${id}`]);
  }
}
