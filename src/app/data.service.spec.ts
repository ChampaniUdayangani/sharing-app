// ******************************************************************
// SSD Assignment 02   - Software Engineering 
// Udayangani Hamy W.C - IT 1602 3574 
// Ranawake P I        - IT 1609 7520
// ******************************************************************

import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  beforeEach(() => {estBed.configureTestingModule({});service = TestBed.inject(DataService);});
  it('should be created', () => {expect(service).toBeTruthy();});
});
