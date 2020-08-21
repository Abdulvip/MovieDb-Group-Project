import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieDbService {
  baseUrl: string = 'https://api.themoviedb.org/3/movie/550?';
  key: string = '24762c0485091b5bfc7fcf403a30da23';

  constructor() {}
}
