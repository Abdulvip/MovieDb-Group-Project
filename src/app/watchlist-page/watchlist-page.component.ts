import { Component, OnInit } from '@angular/core';
import { MovieDbService } from '../movie-db.service';
import { Movie } from '../interface/movie';

@Component({
  selector: 'app-watchlist-page',
  templateUrl: './watchlist-page.component.html',
  styleUrls: ['./watchlist-page.component.css'],
})
export class WatchlistPageComponent implements OnInit {
  watchList: Movie[];
  showDetailsView: boolean;

  constructor(private movieDb: MovieDbService) {}

  ngOnInit(): void {
    this.showDetailsView = false;
    this.watchList = this.movieDb.watchList;
  }

  showDetails(highlightedMovie: Movie){
    this.showDetailsView = true;
  }

  hideDetails(){
    this.showDetailsView = false;
  }

  // onDelete(index: number) {
  //   this.posts.splice(index, 1);
  // }
}
