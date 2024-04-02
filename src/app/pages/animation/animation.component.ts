import { Component, OnInit } from '@angular/core';
import { MoviesapiService } from 'src/app/shared/service/moviesapi.service';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
})
export class AnimationComponent implements OnInit {
  constructor(private _MoviesapiService: MoviesapiService) {}
  ngOnInit(): void {
    this.getAnimation();
  }

  animation: any[] = [];

  pageSize: number = 20; // limit
  currentPage: number = 1; // current page
  total: number = 0;

  getAnimation(): void {
    this._MoviesapiService.getAnimationMovies().subscribe({
      next: (response) => {
        console.log('adventure movies test ', response);
        this.animation = response.results;
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
    this._MoviesapiService.getAnimationMovies(event).subscribe({
      next: (response) => {
        console.log('adventure', response);
        this.animation = response.results;
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
