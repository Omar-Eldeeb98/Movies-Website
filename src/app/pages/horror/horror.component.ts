import { Component } from '@angular/core';
import { MoviesapiService } from 'src/app/shared/service/moviesapi.service';

@Component({
  selector: 'app-horror',
  templateUrl: './horror.component.html',
  styleUrls: ['./horror.component.css'],
})
export class HorrorComponent {
  constructor(private _MoviesapiService: MoviesapiService) {}
  ngOnInit(): void {
    this.getHorror();
  }

  horror: any[] = [];

  pageSize: number = 20; // limit
  currentPage: number = 1; // current page
  total: number = 0;

  getHorror(): void {
    this._MoviesapiService.getHorror().subscribe({
      next: (response) => {
        console.log('documentary movies test ', response);
        this.horror = response.results;
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
    this._MoviesapiService.getHorror(event).subscribe({
      next: (response) => {
        console.log('documentary', response);
        this.horror = response.results;
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
