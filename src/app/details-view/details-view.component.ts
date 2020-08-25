import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieDbService } from '../movie-db.service';
import { Movie } from '../interface/movie';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.css']
})
export class DetailsViewComponent implements OnInit {
  highlightedMovie: Movie;
  @Output() goBackEvent = new EventEmitter<void>();

  constructor(private movieDb: MovieDbService) { }

  ngOnInit(): void {
    this.highlightedMovie = this.movieDb.detailedMovie;
  }
  
  backToList=()=>{
    this.goBackEvent.emit();
  }

}
