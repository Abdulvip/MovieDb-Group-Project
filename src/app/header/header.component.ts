import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../interface/movie';
import { MovieDbService } from '../movie-db.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  resultsPath: string;
  onWatchList: boolean;
  watchListLinkText: string;
  watchListLink: string;
  constructor(private router: Router, private movieDb: MovieDbService) { }

  ngOnInit(): void {
    this.onWatchList= false;
  }

  // watchListAction(){
  //   this.resultsPath = this.movieDb.resultsPath;
  //   this.onWatchList = true;
  // }

  // backToResultsAction(){
  //   console.log(this.resultsPath);
  //   this.onWatchList = false;
  // }


}
