import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesapiService } from 'src/app/shared/service/moviesapi.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  constructor(
    private _MoviesapiService: MoviesapiService,
    private _ActivatedRoute: ActivatedRoute
  ) {}

  movieDetailsResult: any;
  movieVideo: any;
  movieCast: any;

  //!--------------------------------

  ngOnInit(): void {
    let paramId = this._ActivatedRoute.snapshot.paramMap.get('id');
    // console.log(paramId);
    this.getMovieDetails(paramId);
    this.getMovieVideo(paramId);
    this.getMovieCast(paramId);

    // this.getTvDetails(paramId);
    // this.getTvVideo(paramId);
    // this.getTvCast(paramId);
  }

  getMovieDetails(id: any): void {
    this._MoviesapiService.getmovieDetails(id).subscribe({
      next: (response) => {
        console.log(response); //? just for test
        this.movieDetailsResult = response;
      },
      error: (error) => {
        console.log(error); //? just for test
      },
    });
  }

  // getTvDetails(id: any): void {
  //   this._MoviesapiService.getTvDetails(id).subscribe({
  //     next: (response) => {
  //       this.movieDetailsResult = response;
  //       console.log(this.movieDetailsResult, 'tv result');
  //     },
  //     error: (error) => {
  //       console.log(error);
  //     },
  //   });
  // }

  getMovieVideo(id: any) {
    this._MoviesapiService.getMovieVideo(id).subscribe({
      next: (response) => {
        console.log(response); //? for test
        response.results.forEach((ele: any) => {
          if (ele.type === 'Trailer') {
            this.movieVideo = ele.key;
          }
        });
      },
      error: (error) => {
        console.log(error); //? for test
      },
    });
  }

  // getTvVideo(id: any) {
  //   this._MoviesapiService.getTvVideo(id).subscribe({
  //     next: (response) => {
  //       console.log(response); //? for test
  //       response.results.forEach((ele: any) => {
  //         if (ele.type === 'Trailer') {
  //           this.movieVideo = ele.key;
  //         }
  //       });
  //     },
  //     error: (error) => {
  //       console.log(error); //? for test
  //     },
  //   });
  // }

  getMovieCast(id: any) {
    this._MoviesapiService.getMovieCast(id).subscribe({
      next: (response) => {
        console.log(response, 'tv cast'); //? for test
        this.movieCast = response.cast;
      },
      error: (error) => {
        console.log(error); //? for test
      },
    });
  }

  // getTvCast(id: any) {
  //   this._MoviesapiService.getTvCast(id).subscribe({
  //     next: (response) => {
  //       console.log(response); //? for test
  //       this.movieCast = response.cast;
  //     },
  //     error: (error) => {
  //       console.log(error); //? for test
  //     },
  //   });
  // }
}
