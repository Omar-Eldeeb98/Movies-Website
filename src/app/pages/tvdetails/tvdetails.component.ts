import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesapiService } from 'src/app/shared/service/moviesapi.service';

@Component({
  selector: 'app-tvdetails',
  templateUrl: './tvdetails.component.html',
  styleUrls: ['./tvdetails.component.css'],
})
export class TvdetailsComponent implements OnInit {
  constructor(
    private _MoviesapiService: MoviesapiService,
    private _ActivatedRoute: ActivatedRoute
  ) {}

  tvDetailsResult: any;
  tvVideo: any;
  tvCast: any;

  ngOnInit(): void {
    let paramId = this._ActivatedRoute.snapshot.paramMap.get('id');
    this.getTvCast(paramId);
    this.getTvDetails(paramId);

    this.getTvVideo(paramId);
  }

  getTvVideo(id: any) {
    this._MoviesapiService.getTvVideo(id).subscribe({
      next: (response) => {
        console.log(response, 'zzzzzzzzzzzzzzzzzzzzzz'); //? for test
        response.results.forEach((ele: any) => {
          if (ele.type === 'Trailer' || ele.type === 'Clip') {
            this.tvVideo = ele.key;
            console.log(this.tvVideo, 'AAAAAAAAAAAAAAAAAAAAAAAA');
          }
        });
      },
      error: (error) => {
        console.log(error); //? for test
      },
    });
  }

  getTvDetails(id: any): void {
    this._MoviesapiService.getTvDetails(id).subscribe({
      next: (response) => {
        this.tvDetailsResult = response;
        console.log(this.tvDetailsResult, 'tv result');
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getTvCast(id: any) {
    this._MoviesapiService.getTvCast(id).subscribe({
      next: (response) => {
        console.log(response); //? for test
        this.tvCast = response.cast;
      },
      error: (error) => {
        console.log(error); //? for test
      },
    });
  }
}
