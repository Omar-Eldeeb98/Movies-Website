import { OwlOptions } from 'ngx-owl-carousel-o';
import { MoviesapiService } from './../../shared/service/moviesapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  Math: any;
  constructor(private _MoviesapiService: MoviesapiService) {}
  customOptions_2: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 1000,
    navSpeed: 700,
    margin: 10,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 3,
      },
      980: {
        items: 6,
      },
    },
    nav: true,
  };

  bannerData: any[] = []; //? array that carry the response of getBannerData()
  popularMovies: any[] = [];
  trendingMovies: any[] = [];
  actionMovies: any[] = [];
  adventureMovies: any[] = [];
  anmyMovies: any[] = [];
  comedyMovies: any[] = [];
  documentaryMovies: any[] = [];
  fictionMovies: any[] = [];
  horrorMovies: any[] = [];
  arabicMovies: any[] = [];

  pageSize: number = 20; // limit
  currentPage: number = 1; // current page
  total: number = 0;

  isLoading: boolean = false;

  ngOnInit(): void {
    this.getpopularMovies();
    this.getBannerData();
    this.getTrendingMovies();
    this.getActionMovies();
    this.getadventureMovies();
    this.getAnimationMovies();
    this.getComedyMovies();
    this.getDocumentaryMovies();
    this.getFictionMovies();
    this.getHorrorMovies();
    this.getArabicMovies();
  }

  getBannerData(): void {
    this._MoviesapiService.getBannerData().subscribe({
      next: (response) => {
        // console.log(response); //? just for test
        this.bannerData = response.results;
        console.log(this.bannerData, 'test');
      },
      error: (error) => {
        console.log(error); //? just for test
      },
    });
  }

  getpopularMovies(): void {
    this._MoviesapiService.getPopularMovies().subscribe({
      next: (response) => {
        console.log('popular', response);
        this.popularMovies = response.results;
        this.currentPage = response.page;
        this.total = response.total_results;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getTrendingMovies() {
    this._MoviesapiService.getTrendingMovies().subscribe({
      next: (response) => {
        // console.log('trends', response); //? just for test
        this.trendingMovies = response.results;
        console.log('=>', this.trendingMovies); //? for test only
      },
      error: (error) => {
        console.log(error); //? just for test
      },
    });
  }

  getActionMovies(): void {
    this._MoviesapiService.getActionMovies().subscribe({
      next: (response) => {
        // console.log('AAAAA', response);
        this.actionMovies = response.results;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  getadventureMovies(): void {
    this._MoviesapiService.getAdventureMovies().subscribe({
      next: (response) => {
        // console.log('AAAAA', response);
        this.adventureMovies = response.results;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  getAnimationMovies(): void {
    this._MoviesapiService.getAnimationMovies().subscribe({
      next: (response) => {
        // console.log('AAAAA', response);
        this.anmyMovies = response.results;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  getComedyMovies(): void {
    this._MoviesapiService.getComedyMovies().subscribe({
      next: (response) => {
        // console.log('AAAAA', response);
        this.comedyMovies = response.results;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  getDocumentaryMovies(): void {
    this._MoviesapiService.getDocumentaryMovies().subscribe({
      next: (response) => {
        // console.log('AAAAA', response);
        this.documentaryMovies = response.results;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  getFictionMovies(): void {
    this._MoviesapiService.getFictionMovies().subscribe({
      next: (response) => {
        // console.log('AAAAA', response);
        this.fictionMovies = response.results;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  getHorrorMovies(): void {
    this._MoviesapiService.getHorror().subscribe({
      next: (response) => {
        // console.log('AAAAA', response);
        this.horrorMovies = response.results;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  pageChanged(event: any): void {
    console.log(event); //? for test only
    this._MoviesapiService.getPopularMovies(event).subscribe({
      next: (response) => {
        console.log('popular', response);
        this.popularMovies = response.results;
        this.currentPage = response.page;
        this.total = response.total_results;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getArabicMovies(): void {
    this._MoviesapiService.getArabicMovies().subscribe({
      next: (response) => {
        this.arabicMovies = response.results;
        console.log(this.arabicMovies, 'افلام عربي ');
      },
      error: (error) => {
        console.log(error); //? jus for test
      },
    });
  }
}
