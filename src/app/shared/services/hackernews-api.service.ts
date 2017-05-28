import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HackernewsApiService {
  baseUrl: string;

  constructor(private _http: Http) {
    this.baseUrl = 'https://node-hnapi.herokuapp.com';
  }

  fetchFeed(feedType: string, page: number): Observable<any> {
    return this._http
      .get(`${this.baseUrl}/${feedType}?page=${page}`)
      .map(response => response.json());
  }

}
