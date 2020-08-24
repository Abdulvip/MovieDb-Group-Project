import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Movie} from '../interface/movie'
import { MovieDbService } from '../movie-db.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Output() clicked = new EventEmitter<Movie>();
  @Input() movieRef: any;
  constructor(private movieDb: MovieDbService) {}

  ngOnInit(): void {}

  addToWatchList = () => {
    let newMovie = {
      title: this.movieRef.title,
      image: this.movieRef.poster_path
    }
    this.clicked.emit(newMovie);
  };
}
