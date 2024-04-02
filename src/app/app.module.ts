import { LoadingInterceptor } from './interceptor/loading.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { DetailsComponent } from './pages/details/details.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NotfoundComponent } from './pages/notfound/notfound.component';

import { NgxSpinnerModule } from 'ngx-spinner';
import { FooterComponent } from './components/footer/footer.component';
import { TvshowComponent } from './pages/tvshow/tvshow.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { TvdetailsComponent } from './pages/tvdetails/tvdetails.component';
import { TrendingmoviesComponent } from './pages/trendingmovies/trendingmovies.component';
import { ActionmoviesComponent } from './pages/actionmovies/actionmovies.component';
import { AdventuremoviesComponent } from './pages/adventuremovies/adventuremovies.component';
import { AnimationComponent } from './pages/animation/animation.component';
import { ComedyComponent } from './pages/comedy/comedy.component';
import { DocumentaryComponent } from './pages/documentary/documentary.component';
import { FictionComponent } from './pages/fiction/fiction.component';
import { HorrorComponent } from './pages/horror/horror.component';
import { ArabicComponent } from './pages/arabic/arabic.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    DetailsComponent,
    NotfoundComponent,
    FooterComponent,
    TvshowComponent,
    TvdetailsComponent,
    TrendingmoviesComponent,
    ActionmoviesComponent,
    AdventuremoviesComponent,
    AnimationComponent,
    ComedyComponent,
    DocumentaryComponent,
    FictionComponent,
    HorrorComponent,
    ArabicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    RouterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    NgxPaginationModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
