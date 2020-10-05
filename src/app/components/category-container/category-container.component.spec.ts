// ******************************************************************
// SSD Assignment 02   - Software Engineering 
// Udayangani Hamy W.C - IT 1602 3574 
// Ranawake P I        - IT 1609 7520
//
// Component to hold the categories
// ******************************************************************

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryContainerComponent } from './category-container.component';

describe('CategoryContainerComponent', () => {
  let component: CategoryContainerComponent;
  let fixture: ComponentFixture<CategoryContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
