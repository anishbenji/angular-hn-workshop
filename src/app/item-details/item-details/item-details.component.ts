import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { HackernewsApiService } from '../../shared/services/hackernews-api.service';

import { ItemDetail } from '../../shared/models/item-detail';
import { ParamId } from '../../shared/models/param-id';

@Component({
  selector: 'hn-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  item: ItemDetail;

  constructor(
    private _route: ActivatedRoute,
    private _location: Location,
    private _hnApi: HackernewsApiService
  ) { }

  ngOnInit() {
    this._route.params
      .switchMap((params: ParamId) => this._hnApi.fetchItemContent(+params.id))
      .subscribe(
        (item: ItemDetail) => this.item = item,
        (error: any) => console.log('Could not load item contents', error)
      );
  }

  goBack(): void {
    this._location.back();
  }

  get hasUrl(): boolean {
    return this.item.url.indexOf('http') === 0;
  }

}
