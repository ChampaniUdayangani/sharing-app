import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-container',
  templateUrl: './category-container.component.html',
  styleUrls: ['./category-container.component.css']
})
export class CategoryContainerComponent implements OnInit {

  categories = ['Decoration Ideas', 'Art Ideas', 'Cooking Ideas', 'Clothing Ideas'];

  decoData = [
      {
        image: './assets/deco01.jpg',
        title: 'Book Rack'
      },
      {
        image: './assets/deco02.jpg',
        title: 'Living Room'
      },
      {
        image: './assets/deco03.jpg',
        title: 'Living Room Wall'
      },
      {
        image: './assets/deco04.jpg',
        title: 'Dining Room'
      }
    ];

    artData = [
      {
        image: './assets/art01.jpg',
        title: 'Realistic Face'
      },
      {
        image: './assets/art02.jpg',
        title: 'Painting'
      }
    ];

    cookingData = [
      {
        image: './assets/cooking01.jpg',
        title: 'Garlic Toast Pizza'
      },
      {
        image: './assets/cooking02.jpg',
        title: 'Meatballs & Gravy'
      },
      {
        image: './assets/cooking03.jpg',
        title: 'French Onion Potroast'
      }
    ];

    clothingData = [
      {
        image: './assets/clothing01.jpg',
        title: 'Trouser & Coat'
      },
      {
        image: './assets/clothing02.jpg',
        title: 'Sweater & Skirt'
      },
      {
        image: './assets/clothing03.jpg',
        title: 'Black Dress'
      },
      {
        image: './assets/clothing04.jpg',
        title: 'Casual'
      },
      {
        image: './assets/clothing05.jpg',
        title: 'Formal Suit'
      },
      {
        image: './assets/clothing06.jpg',
        title: 'Smart Casual'
      }
    ];

  constructor() { }

  ngOnInit(): void {
  }


}
