import { Component, OnInit } from '@angular/core';
import { MoviesapiService } from 'src/app/shared/service/moviesapi.service';

@Component({
  selector: 'app-arabic',
  templateUrl: './arabic.component.html',
  styleUrls: ['./arabic.component.css'],
})
export class ArabicComponent implements OnInit {
  constructor(private _MoviesapiService: MoviesapiService) {}
  ngOnInit(): void {
    this.getArabic();
  }

  arabic: any[] = [];

  pageSize: number = 20; // limit
  currentPage: number = 1; // current page
  total: number = 0;

  getArabic(): void {
    this._MoviesapiService.getArabicMovies().subscribe({
      next: (response) => {
        console.log('documentary movies test ', response);
        this.arabic = response.results;
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
    this._MoviesapiService.getArabicMovies(event).subscribe({
      next: (response) => {
        console.log('documentary', response);
        this.arabic = response.results;
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
