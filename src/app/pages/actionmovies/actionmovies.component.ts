import { Component, OnInit } from '@angular/core';
import { MoviesapiService } from 'src/app/shared/service/moviesapi.service';

@Component({
  selector: 'app-actionmovies',
  templateUrl: './actionmovies.component.html',
  styleUrls: ['./actionmovies.component.css'],
})
export class ActionmoviesComponent implements OnInit {
  constructor(private _MoviesapiService: MoviesapiService) {}
  ngOnInit(): void {
    this.getAction();
  }

  action: any[] = [];

  pageSize: number = 20; // limit
  currentPage: number = 1; // current page
  total: number = 0;

  getAction(): void {
    this._MoviesapiService.getActionMovies().subscribe({
      next: (response) => {
        console.log('trending movies test ', response);
        this.action = response.results;
        this.currentPage = response.page;
        this.total = response.total_results;

        // console.log('list', this.tvshows); //? just for test
      },
      error: (error) => {
        console.log(error); //? just for test
      },
    });
  }

  pageChanged(event: any): void {
    console.log(event); //? for test only
    this._MoviesapiService.getActionMovies(event).subscribe({
      next: (response) => {
        console.log('trending', response);
        this.action = response.results;
        this.currentPage = response.page;
        this.total = response.total_results;

        // console.log('list', this.tvshows); //? just for test
      },
      error: (error) => {
        console.log(error); //? just for test
      },
    });
  }
}
