import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './interface/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieDbService {
  detailedMovie: Movie;
  watchList: Movie[];
  // baseUrl: string = 'https://api.themoviedb.org/3/movie/550?';
  genreUrl: string =
    'https://api.themoviedb.org/3/genre/movie/list?api_key=24762c0485091b5bfc7fcf403a30da23&language=en-US';
  discoverBaseUrl: string = `https://api.themoviedb.org/3/discover/movie?api_key=8bdaf99ef685224150a33e36db6646d6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
  key: string = '24762c0485091b5bfc7fcf403a30da23';

  constructor(private http: HttpClient) {
    this.watchList = [];
  }

  getMovieList = (
    genreId: string,
    releaseYear: string,
    rating: string
  ): any => {
    return this.http.get(this.discoverBaseUrl, {
      params: {
        with_genres: genreId,
        primary_release_year: releaseYear,
        'vote_average.gte': rating,
      },
    });
  };

  getGenre = (): any => {
    return this.http.get(this.genreUrl);
  };

  showDetails=(highlightedMovie: Movie)=>{
    this.detailedMovie = highlightedMovie;
  }
}
