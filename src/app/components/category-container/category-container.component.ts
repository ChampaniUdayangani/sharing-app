// ******************************************************************
// SSD Assignment 02   - Software Engineering 
// Udayangani Hamy W.C - IT 1602 3574 
// Ranawake P I        - IT 1609 7520
// ******************************************************************

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
        image: 'https://snapify-app.herokuapp.com/assets/deco01.jpg',
        title: 'Book Rack'
      },
      {
        image: 'https://snapify-app.herokuapp.com/assets/deco02.jpg',
        title: 'Living Room'
      },
      {
        image: 'https://snapify-app.herokuapp.com/assets/deco03.jpg',
        title: 'Living Room Wall'
      },
      {
        image: 'https://snapify-app.herokuapp.com/assets/deco04.jpg',
        title: 'Dining Room'
      }
    ];

    artData = [
      {
        image: 'https://snapify-app.herokuapp.com/assets/art01.jpg',
        title: 'Realistic Face'
      },
      {
        image: 'https://snapify-app.herokuapp.com/assets/art02.jpg',
        title: 'Painting'
      }
    ];

    cookingData = [
      {
        image: 'https://snapify-app.herokuapp.com/assets/cooking01.jpg',
        title: 'Garlic Toast Pizza'
      },
      {
        image: 'https://snapify-app.herokuapp.com/assets/cooking02.jpg',
        title: 'Meatballs & Gravy'
      },
      {
        image: 'https://snapify-app.herokuapp.com/assets/cooking03.jpg',
        title: 'French Onion Potroast'
      }
    ];

    clothingData = [
      {
        image: 'https://snapify-app.herokuapp.com/assets/clothing01.jpg',
        title: 'Trouser & Coat'
      },
      {
        image: 'https://snapify-app.herokuapp.com/assets/clothing02.jpg',
        title: 'Sweater & Skirt'
      },
      {
        image: 'https://snapify-app.herokuapp.com/assets/clothing03.jpg',
        title: 'Black Dress'
      },
      {
        image: 'https://snapify-app.herokuapp.com/assets/clothing04.jpg',
        title: 'Casual'
      },
      {
        image: 'https://snapify-app.herokuapp.com/assets/clothing05.jpg',
        title: 'Formal Suit'
      },
      {
        image: 'https://snapify-app.herokuapp.com/assets/clothing06.jpg',
        title: 'Smart Casual'
      }
    ];

  constructor() { }

  ngOnInit(): void {
  }


}
