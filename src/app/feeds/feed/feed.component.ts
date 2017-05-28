import { Component, OnInit } from '@angular/core';

import { HackernewsApiService } from '../../shared/services/services.module';

@Component({
  selector: 'hn-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  items: any;

  constructor(
    private _hnApi: HackernewsApiService
  ) { }

  ngOnInit() {
    this._hnApi.fetchFeed('news', 1)
      .subscribe(
        (items: any) => this.items = items,
        error => console.log('Error fetching feed', error)
      );
  }

}
