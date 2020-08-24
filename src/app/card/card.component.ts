import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Output() clicked = new EventEmitter<string>();
  @Input() movieRef: any;
  constructor() {}

  ngOnInit(): void {}

  addToWatchList = () => {
    console.log(this.movieRef.title);
  };
}
