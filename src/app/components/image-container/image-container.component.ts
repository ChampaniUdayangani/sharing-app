import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.css']
})
export class ImageContainerComponent implements OnInit {
   // tslint:disable-next-line: no-input-rename
   @Input('data') items: any[];



  constructor() {
    console.log(this.items);
   }

  ngOnInit(): void {
    console.log(this.items);
  }

}
