import { ArabicComponent } from './pages/arabic/arabic.component';
import { HorrorComponent } from './pages/horror/horror.component';
import { FictionComponent } from './pages/fiction/fiction.component';
import { DocumentaryComponent } from './pages/documentary/documentary.component';
import { ComedyComponent } from './pages/comedy/comedy.component';
import { AdventuremoviesComponent } from './pages/adventuremovies/adventuremovies.component';
import { ActionmoviesComponent } from './pages/actionmovies/actionmovies.component';
import { TrendingmoviesComponent } from './pages/trendingmovies/trendingmovies.component';
import { TvdetailsComponent } from './pages/tvdetails/tvdetails.component';
import { TvshowComponent } from './pages/tvshow/tvshow.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { DetailsComponent } from './pages/details/details.component';
import { SearchComponent } from './pages/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationComponent } from './pages/animation/animation.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home Page ' },
  { path: 'search', component: SearchComponent, title: 'Search Page' },
  { path: 'details/:id', component: DetailsComponent, title: 'Movie Details' },
  { path: 'tvdetails/:id', component: TvdetailsComponent, title: 'TV Details' },
  { path: 'tvshow', component: TvshowComponent, title: 'TV-Shows ' },
  { path: 'trending', component: TrendingmoviesComponent, title: 'Trending  ' },
  { path: 'action', component: ActionmoviesComponent, title: 'Action  ' },
  { path: 'comedy', component: ComedyComponent, title: 'Comedy  ' },
  { path: 'fiction', component: FictionComponent, title: 'Fiction  ' },
  { path: 'horror', component: HorrorComponent, title: 'Horror  ' },
  { path: 'arabic', component: ArabicComponent, title: 'Arabic  ' },
  {
    path: 'documentary',
    component: DocumentaryComponent,
    title: 'Documentary  ',
  },
  {
    path: 'adventure',
    component: AdventuremoviesComponent,
    title: 'Adventure  ',
  },
  {
    path: 'animation',
    component: AnimationComponent,
    title: 'Animation  ',
  },
  { path: '**', component: NotfoundComponent, title: 'NotFound Page' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
