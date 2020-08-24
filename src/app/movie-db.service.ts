import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieDbService {
  // baseUrl: string = 'https://api.themoviedb.org/3/movie/550?';
  genreUrl: string =
    'https://api.themoviedb.org/3/genre/movie/list?api_key=24762c0485091b5bfc7fcf403a30da23&language=en-US';
  key: string = '24762c0485091b5bfc7fcf403a30da23';

  constructor(private http: HttpClient) {}

  getGenre = (): any => {
    return this.http.get(this.genreUrl);
  };
}
