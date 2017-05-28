import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hn-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  items: number[];

  constructor() {
    this.items = Array(30);
  }

  ngOnInit() {
  }

}
