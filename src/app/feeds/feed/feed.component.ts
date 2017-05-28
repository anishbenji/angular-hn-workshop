import { Component, OnInit } from '@angular/core';

import { HackernewsApiService } from '../../shared/services/services.module';

import { NewsItem } from '../../shared/models/news-item';

@Component({
  selector: 'hn-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  items: NewsItem[];

  constructor(
    private _hnApi: HackernewsApiService
  ) { }

  ngOnInit() {
    this._hnApi.fetchFeed('news', 1)
      .subscribe(
        (items: NewsItem[]) => this.items = items,
        error => console.log('Error fetching feed', error)
      );
  }

}
