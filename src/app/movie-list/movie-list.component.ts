import { Component, OnInit } from '@angular/core';
import { MovieDbService } from '../movie-db.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../interface/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movieList: any;
  showDetailsView: boolean;
  constructor(private movieDb: MovieDbService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getMovieList();
    this.showDetailsView = false;
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

  showDetails(highlightedMovie: Movie){
    this.showDetailsView = true;
  }

  hideDetails(){
    this.showDetailsView = false;
  }

}
