import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperSectionComponent } from './upper-section.component';

describe('UpperSectionComponent', () => {
  let component: UpperSectionComponent;
  let fixture: ComponentFixture<UpperSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpperSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpperSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
