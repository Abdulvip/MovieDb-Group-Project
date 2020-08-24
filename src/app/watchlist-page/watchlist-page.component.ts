import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watchlist-page',
  templateUrl: './watchlist-page.component.html',
  styleUrls: ['./watchlist-page.component.css'],
})
export class WatchlistPageComponent implements OnInit {
  watchList: string[];

  constructor() {}

  ngOnInit(): void {}

  // onDelete(index: number) {
  //   this.posts.splice(index, 1);
  // }
}
