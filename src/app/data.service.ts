// ******************************************************************
// SSD Assignment 02   - Software Engineering 
// Udayangani Hamy W.C - IT 1602 3574 
// Ranawake P I        - IT 1609 7520
// ******************************************************************

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  connectUrl = 'https://sharing-app-bc.herokuapp.com/facebook';
  pageUrl = 'https://sharing-app-bc.herokuapp.com/pages';
  postUrl = 'https://sharing-app-bc.herokuapp.com/posts';

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    })
  };

  connectFB() {
    return this.http.get(this.connectUrl, this.httpOptions);
  }

  getPage() {
    return this.http.get(this.pageUrl);
  }

  createPost(imageUrl: string) {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const body = { 'url': imageUrl, 'msg': 'Posted Through Snapify web app. Check it out for some cool ideas https://snapify-app.herokuapp.com/' };
    return this.http.post(this.postUrl, JSON.stringify(body), options);
}
}
