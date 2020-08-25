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

  constructor(private movieDb: MovieDbService) {}

  ngOnInit(): void {

    this.watchList = this.movieDb.watchList;
  }

  // onDelete(index: number) {
  //   this.posts.splice(index, 1);
  // }
}
