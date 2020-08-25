import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Movie} from '../interface/movie'
import { MovieDbService } from '../movie-db.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Output() clicked = new EventEmitter<Movie>();
  @Output() detailsEvent = new EventEmitter<Movie>();
  @Input() movieRef: any;
  watchListButtonText: string;
  addedToWatchList: boolean;
  constructor(private movieDb: MovieDbService, private router: Router) {

 
  }

  ngOnInit(): void {
    

      if(this.movieDb.watchList.some((movie)=>{return movie.original_title === this.movieRef.original_title})){
        
        this.addedToWatchList = true;
        this.watchListButtonText = "Remove from Watchlist";
      }
      else{
        this.addedToWatchList = false;
        this.watchListButtonText = "Add to Watchlist";
      }

  }

  toggleWatchList = () => {
    if(!this.addedToWatchList){
      this.addedToWatchList = true;
      let newMovie: Movie = {
        original_title: this.movieRef.title,
        poster_path: this.movieRef.poster_path,
        vote_average: this.movieRef.vote_average,
        overview: this.movieRef.overview,
      }
      this.movieDb.watchList.push(newMovie);
      this.watchListButtonText = "Remove from Watchlist";
    }
    else{
      this.addedToWatchList = false;
      this.watchListButtonText = "Add to Watchlist";

      this.movieDb.watchList.splice(this.movieDb.watchList.findIndex((movie)=>{
        return movie.original_title === this.movieRef.original_title;
      }), 1)
    }
  };

  moreDetails = () => {
    this.detailsEvent.emit(this.movieRef);
    this.movieDb.showDetails(this.movieRef);
  }


}
