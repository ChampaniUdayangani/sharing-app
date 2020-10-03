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

  // Default Constructor
  constructor(private http: HttpClient) { }


  // Constants to hold the API callback strings

  // Create Posts
  postUrl = 'https://sharing-app-bc.herokuapp.com/posts'; 
  // Get Pages
  pageUrl = 'https://sharing-app-bc.herokuapp.com/pages'; 
  // Connect to facebook
  connectUrl = 'https://sharing-app-bc.herokuapp.com/facebook'; 
  
  

  // Create HTTP Header 
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    })
  };

  // Connect to Facebook with a GET rquest
  connectFB() {return this.http.get(this.connectUrl, this.httpOptions);}

  // GET the pages with a GET request 
  getPage() {return this.http.get(this.pageUrl);}

  // Creawte a post with a POST request 
  createPost(imageUrl: string) {
    const options = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })}; // Creation of the HTTP header
    const body = { 'url': imageUrl, 'msg': 'Posted Through Snapify web app. Check it out for some cool ideas https://snapify-app.herokuapp.com/' }; return this.http.post(this.postUrl, JSON.stringify(body), options);
  }
}
