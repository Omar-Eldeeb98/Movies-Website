import { Component, OnInit } from '@angular/core';
import { MoviesapiService } from 'src/app/shared/service/moviesapi.service';

@Component({
  selector: 'app-adventuremovies',
  templateUrl: './adventuremovies.component.html',
  styleUrls: ['./adventuremovies.component.css'],
})
export class AdventuremoviesComponent implements OnInit {
  constructor(private _MoviesapiService: MoviesapiService) {}
  ngOnInit(): void {
    this.getAdventures();
  }

  adventures: any[] = [];

  pageSize: number = 20; // limit
  currentPage: number = 1; // current page
  total: number = 0;

  getAdventures(): void {
    this._MoviesapiService.getAdventureMovies().subscribe({
      next: (response) => {
        console.log('adventure movies test ', response);
        this.adventures = response.results;
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
        console.log('adventure', response);
        this.adventures = response.results;
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
