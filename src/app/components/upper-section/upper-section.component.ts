// ******************************************************************
// SSD Assignment 02   - Software Engineering 
// Udayangani Hamy W.C - IT 1602 3574 
// Ranawake P I        - IT 1609 7520
// ******************************************************************

import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-upper-section',
  templateUrl: './upper-section.component.html',
  styleUrls: ['./upper-section.component.css']
})
export class UpperSectionComponent implements OnInit {
  infoMessage = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  changeInfoMessage(){
    this.infoMessage = 'We provide you the capability of sharing content of this web site as posts, on your FB pages';
  }

  connectFBAccount(){
    this.dataService.connectFB()
    .subscribe((response) => {
      let url = response['url'];
      console.log(url);
      window.location.href = url;
    });
  }
}
