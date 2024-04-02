import { Component, OnInit } from '@angular/core';
import { MoviesapiService } from 'src/app/shared/service/moviesapi.service';

@Component({
  selector: 'app-fiction',
  templateUrl: './fiction.component.html',
  styleUrls: ['./fiction.component.css'],
})
export class FictionComponent implements OnInit {
  constructor(private _MoviesapiService: MoviesapiService) {}
  ngOnInit(): void {
    this.getFiction();
  }

  fiction: any[] = [];

  pageSize: number = 20; // limit
  currentPage: number = 1; // current page
  total: number = 0;

  getFiction(): void {
    this._MoviesapiService.getFictionMovies().subscribe({
      next: (response) => {
        console.log('documentary movies test ', response);
        this.fiction = response.results;
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
    this._MoviesapiService.getFictionMovies(event).subscribe({
      next: (response) => {
        console.log('documentary', response);
        this.fiction = response.results;
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
