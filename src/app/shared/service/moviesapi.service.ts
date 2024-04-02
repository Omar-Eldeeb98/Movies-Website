import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesapiService {
  constructor(private _HttpClient: HttpClient) {}

  baseurl: string = 'https://api.themoviedb.org/3/';
  apikey: string = '97a99791123755503592d3c47e94e2cc';

  //^ movies for banner
  getBannerData(): Observable<any> {
    return this._HttpClient.get(
      `${this.baseurl}trending/all/week?api_key=${this.apikey}`
    );
  }

  //^ popular movies
  getPopularMovies(pageNumber: number = 1): Observable<any> {
    return this._HttpClient.get(
      `${this.baseurl}movie/popular?api_key=${this.apikey}&page=${pageNumber}`
    );
  }

  //^ trending moives
  getTrendingMovies(pageNumber: number = 1): Observable<any> {
    return this._HttpClient.get(
      `${this.baseurl}trending/movie/day?api_key=${this.apikey}&page=${pageNumber}`
    );
  }

  //^ action movies
  getActionMovies(pageNumber: number = 1): Observable<any> {
    return this._HttpClient.get(
      `${this.baseurl}discover/movie?api_key=${this.apikey}&with_genres=28&page=${pageNumber}`
    );
  }
  //^ adventure movies
  getAdventureMovies(pageNumber: number = 1): Observable<any> {
    return this._HttpClient.get(
      `${this.baseurl}discover/movie?api_key=${this.apikey}&with_genres=12&page=${pageNumber}`
    );
  }
  //^ animation movies
  getAnimationMovies(pageNumber: number = 1): Observable<any> {
    return this._HttpClient.get(
      `${this.baseurl}discover/movie?api_key=${this.apikey}&with_genres=16&page=${pageNumber}`
    );
  }
  //^ comedy movies
  getComedyMovies(pageNumber: number = 1): Observable<any> {
    return this._HttpClient.get(
      `${this.baseurl}discover/movie?api_key=${this.apikey}&with_genres=35&page=${pageNumber}`
    );
  }
  //^ documentary movies
  getDocumentaryMovies(pageNumber: number = 1): Observable<any> {
    return this._HttpClient.get(
      `${this.baseurl}discover/movie?api_key=${this.apikey}&with_genres=99&page=${pageNumber}`
    );
  }
  //^ fiction movies
  getFictionMovies(pageNumber: number = 1): Observable<any> {
    return this._HttpClient.get(
      `${this.baseurl}discover/movie?api_key=${this.apikey}&with_genres=878&page=${pageNumber}`
    );
  }
  //^ horror movies
  getHorror(pageNumber: number = 1): Observable<any> {
    return this._HttpClient.get(
      `${this.baseurl}discover/movie?api_key=${this.apikey}&with_genres=27&page=${pageNumber}`
    );
  }
  //^ arabic movies
  getArabicMovies(pageNumber: number = 1): Observable<any> {
    return this._HttpClient.get(
      `${this.baseurl}discover/movie?api_key=${this.apikey}&language=ar&region=eg&with_original_language=ar&page=${pageNumber} `
    );
  }

  //^ search movies api
  seachMovies(term: any): Observable<any> {
    return this._HttpClient.get(
      `${this.baseurl}search/movie?api_key=${this.apikey}&query=${term.movieName}`
    );
  }

  //^ get movie details
  getmovieDetails(id: any): Observable<any> {
    return this._HttpClient.get(
      `${this.baseurl}movie/${id}?api_key=${this.apikey}`
    );
  }
  //^ get tv details
  getTvDetails(id: any): Observable<any> {
    return this._HttpClient.get(
      `${this.baseurl}tv/${id}?api_key=${this.apikey}`
    );
  }

  //^ get movie video
  getMovieVideo(id: any): Observable<any> {
    return this._HttpClient.get(
      `${this.baseurl}movie/${id}/videos?api_key=${this.apikey}`
    );
  }
  //^ get tv video
  getTvVideo(id: any): Observable<any> {
    return this._HttpClient.get(
      `${this.baseurl}tv/${id}/videos?api_key=${this.apikey}`
    );
  }

  //^ get movie cast
  getMovieCast(id: any): Observable<any> {
    return this._HttpClient.get(
      `${this.baseurl}movie/${id}/credits?api_key=${this.apikey}`
    );
  }
  //^ get tv cast
  getTvCast(id: any): Observable<any> {
    return this._HttpClient.get(
      `${this.baseurl}tv/${id}/credits?api_key=${this.apikey}`
    );
  }

  //^ get all tv show   (المسلسلات )
  getTvShow(pageNumber: number = 1): Observable<any> {
    return this._HttpClient.get(
      `  ${this.baseurl}tv/popular?api_key=${this.apikey}&page=${pageNumber}`
    );
  }
}
