import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { WatchlistPageComponent } from './watchlist-page/watchlist-page.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';

const routes: Routes = [
  { path: 'movie-list', component: MovieListComponent },
  { path: 'watchlist-page', component: WatchlistPageComponent },
  { path: 'search-criteria', component: SearchCriteriaComponent },
  { path: '', redirectTo: '/search-criteria', pathMatch: 'full' },
  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
