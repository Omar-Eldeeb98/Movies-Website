import { MoviesapiService } from './../../shared/service/moviesapi.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  constructor(private _MoviesapiService: MoviesapiService) {}

  searchResult: any[] = [];
  searchResult2: any[] = [];

  searchForm: FormGroup = new FormGroup({
    movieName: new FormControl(null),
  });

  submitForm(): void {
    console.log(this.searchForm.value); //? just for test
    this._MoviesapiService.seachMovies(this.searchForm.value).subscribe({
      next: (response) => {
        this.searchResult = response.results;
        this.searchResult2 = response.results;
        console.log(this.searchResult); //? test
      },
      error: (error) => {
        console.log(error); //? test
      },
    });
  }
}
