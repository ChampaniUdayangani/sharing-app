import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-container',
  templateUrl: './category-container.component.html',
  styleUrls: ['./category-container.component.css']
})
export class CategoryContainerComponent implements OnInit {

  categories = ['Decoration Ideas', 'Art Ideas', 'Cooking Ideas', 'Clothing Ideas'];

  constructor() { }

  ngOnInit(): void {
  }

}
