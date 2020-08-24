import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieDbService } from '../movie-db.service';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],
})
export class SearchCriteriaComponent implements OnInit {
  genres: any;

  constructor(private router: Router, private movieDb: MovieDbService) {}

  ngOnInit(): void {
    this.getGenre();
  }

  filter = (form: NgForm) => {
    console.log(form.value);
    this.router.navigate(['movie-list']);
  };

  getGenre = (): any => {
    this.movieDb.getGenre().subscribe((response) => {
      console.log(response);
      this.genres = response.genres;
    });
  };
}
