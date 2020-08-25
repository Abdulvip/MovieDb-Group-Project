import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { WatchlistPageComponent } from './watchlist-page/watchlist-page.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { WatchlistCardComponent } from './watchlist-card/watchlist-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchCriteriaComponent,
    MovieListComponent,
    WatchlistPageComponent,
    CardComponent,
    HeaderComponent,
    WatchlistCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
