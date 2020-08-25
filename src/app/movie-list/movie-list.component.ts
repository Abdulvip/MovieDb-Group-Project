import { Component, OnInit } from '@angular/core';
import { MovieDbService } from '../movie-db.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movieList: any;
  constructor(private movieDb: MovieDbService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getMovieList();
  }

  getMovieList = () => {
    this.route.queryParamMap.subscribe((params) => {
      this.movieDb
        .getMovieList(
          params.get('genre'),
          params.get('year'),
          params.get('rating')
        )
        .subscribe((response) => {
          this.movieList = response.results;
        });
    });
  };
}
