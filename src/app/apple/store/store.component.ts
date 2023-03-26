import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  slides: any = [
    { id: 1, tittle: "apple", img: "assets/iimages/store7.png", title: "Mac" },
    { id: 2, img: "assets/iimages/store8.png", title: "iphone" },

    { id: 4, img: "assets/iimages/store9.png", title: "ipad" },
    { id: 5, img: "assets/iimages/store10.png", title: "Apple watch" },
    { id: 6, img: "assets/iimages/store11.png", title: "AirPods" },
    { id: 7, img: "assets/iimages/store12.png", title: "Airtv4g" },
    { id: 8, img: "assets/iimages/store13.png", title: "HomePod 4k" },
    { id: 9, img: "assets/iimages/store14.png", title: "Accessories" },
    { id: 10, img: "assets/iimages/store15.png", title: "Apple gift card" },
  ];
  customOptions1: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  slides1: any = [
    { id: 1, img: "assets/iimages/owl2.jpg" },
    { id: 2, img: "assets/iimages/owl3.jpg" },
    { id: 4, img: "assets/iimages/owl4.jpg" },
    { id: 5, img: "assets/iimages/owl5.jpg" },
    { id: 6, img: "assets/iimages/owl6.jpg" },
    { id: 7, img: "assets/iimages/owl7.jpg" },
    { id: 8, img: "assets/iimages/owl8.jpg" },
    { id: 9, img: "assets/iimages/owl9.jpg" },
    { id: 10, img: "assets/iimages/owl10.jpg" },
  ];
}

