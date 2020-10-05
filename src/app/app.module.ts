// ******************************************************************
// SSD Assignment 02   - Software Engineering 
// Udayangani Hamy W.C - IT 1602 3574 
// Ranawake P I        - IT 1609 7520
// ******************************************************************

// The main Appllcation modules 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryContainerComponent } from './components/category-container/category-container.component';
import { ImageContainerComponent } from './components/image-container/image-container.component';
import { UpperSectionComponent } from './components/upper-section/upper-section.component';

@NgModule({
  declarations: [
    // Component for the main Application 
    AppComponent,
    
    // Component for the categories section 
    CategoryContainerComponent,

    // Component for the Image placeholders
    ImageContainerComponent,
    UpperSectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
