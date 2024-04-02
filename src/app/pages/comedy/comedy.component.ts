import { Component, OnInit } from '@angular/core';
import { MoviesapiService } from 'src/app/shared/service/moviesapi.service';

@Component({
  selector: 'app-comedy',
  templateUrl: './comedy.component.html',
  styleUrls: ['./comedy.component.css'],
})
export class ComedyComponent implements OnInit {
  constructor(private _MoviesapiService: MoviesapiService) {}
  ngOnInit(): void {
    this.getComedy();
  }

  comedy: any[] = [];

  pageSize: number = 20; // limit
  currentPage: number = 1; // current page
  total: number = 0;

  getComedy(): void {
    this._MoviesapiService.getComedyMovies().subscribe({
      next: (response) => {
        console.log('adventure movies test ', response);
        this.comedy = response.results;
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
    this._MoviesapiService.getComedyMovies(event).subscribe({
      next: (response) => {
        console.log('adventure', response);
        this.comedy = response.results;
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
