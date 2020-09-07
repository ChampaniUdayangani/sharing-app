import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryContainerComponent } from './components/category-container/category-container.component';
import { ImageContainerComponent } from './components/image-container/image-container.component';
import { UpperSectionComponent } from './components/upper-section/upper-section.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryContainerComponent,
    ImageContainerComponent,
    UpperSectionComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
