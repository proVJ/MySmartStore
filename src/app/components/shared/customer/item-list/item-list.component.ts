import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IonGrid, IonRow, IonCol, IonContent } from '@ionic/angular/standalone';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
  imports: [
    CommonModule,
    IonContent,
    IonCol,
    IonRow,
    IonGrid,
    MatGridListModule,
  ],
})
export class ItemListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  categories = [
    {
      name: 'Fruits',
      icon: 'https://media.istockphoto.com/id/683044558/photo/fresh-fruits-and-vegetables.jpg?s=1024x1024&w=is&k=20&c=tOe-UFjTVOPVzsYKUJTdZsDkbCTRW3qaScoFlR10o8U=',
    },
    {
      name: 'Vegetables',
      icon: 'https://media.istockphoto.com/id/683044554/photo/assortment-of-the-fresh-vegetables.jpg?s=1024x1024&w=is&k=20&c=soYvpwrXKHKpufF0uq0ZeUtL9jGTgWNJ9_uJA1VGh6Y=',
    },
    {
      name: 'Snacks',
      icon: 'https://media.istockphoto.com/id/1153268660/vector/snack-and-fast-food-products-set-cartoon-meal-and-drinks-vector-illustration-isolated-on.jpg?s=1024x1024&w=is&k=20&c=D4x4J6PQud2IwsEJyZh20hF_NK00yb7ovi_Dnt399pU=',
    },
    {
      name: 'Dairy',
      icon: 'https://media.istockphoto.com/id/1127694830/vector/dairy-products-set-collection-of-milk-food.jpg?s=1024x1024&w=is&k=20&c=fgyPlLkROR20L-AcbasME2vH5VL6Eah8jGHg8morM4Q=',
    },
    {
      name: 'Bakery',
      icon: 'https://media.istockphoto.com/id/1211789574/vector/bakery-thin-line-icon-set-bakery-shop-signs-collection-sketches-logo-illustrations-web.jpg?s=1024x1024&w=is&k=20&c=B3tYX-jy-rEWPPnFaAhQhSszuOtLhMMjPbUCYmvRdok=',
    },
    {
      name: 'Drinks',
      icon: 'https://media.istockphoto.com/id/1202231770/vector/line-cocktail-icons.jpg?s=1024x1024&w=is&k=20&c=QKKRAej3i5G1HgFsSu1jStBZ-YjpKkOUHa_2o7JwWWk=',
    },
    {
      name: 'Household',
      icon: 'https://media.istockphoto.com/id/2205552496/vector/home-interior-and-furniture-icon-set-thin-line-editable-stroke-icons-for-interior-design.jpg?s=1024x1024&w=is&k=20&c=JHxZOvLnhyxUxrsoUJinBLeuEodu5Nim0cDPLr5klgA=',
    },
    {
      name: 'Personal Care',
      icon: 'https://media.istockphoto.com/id/2194662963/vector/beauty-and-spa-icon-set-solid-icon-collection-vector-illustration-stock-illustration-icon.jpg?s=1024x1024&w=is&k=20&c=0MBAI8bFofbfpTKo4-DbQqGwGMLKBHIvUDoQuhaa7Fg=',
    },

    {
      name: 'test 1',
      icon: 'https://media.istockphoto.com/id/2194662963/vector/beauty-and-spa-icon-set-solid-icon-collection-vector-illustration-stock-illustration-icon.jpg?s=1024x1024&w=is&k=20&c=0MBAI8bFofbfpTKo4-DbQqGwGMLKBHIvUDoQuhaa7Fg=',
    },
    {
      name: 'test 2',
      icon: 'https://media.istockphoto.com/id/2194662963/vector/beauty-and-spa-icon-set-solid-icon-collection-vector-illustration-stock-illustration-icon.jpg?s=1024x1024&w=is&k=20&c=0MBAI8bFofbfpTKo4-DbQqGwGMLKBHIvUDoQuhaa7Fg=',
    },

    {
      name: 'test 3',
      icon: 'https://media.istockphoto.com/id/2194662963/vector/beauty-and-spa-icon-set-solid-icon-collection-vector-illustration-stock-illustration-icon.jpg?s=1024x1024&w=is&k=20&c=0MBAI8bFofbfpTKo4-DbQqGwGMLKBHIvUDoQuhaa7Fg=',
    },

    {
      name: 'test 4',
      icon: 'https://media.istockphoto.com/id/2194662963/vector/beauty-and-spa-icon-set-solid-icon-collection-vector-illustration-stock-illustration-icon.jpg?s=1024x1024&w=is&k=20&c=0MBAI8bFofbfpTKo4-DbQqGwGMLKBHIvUDoQuhaa7Fg=',
    },
    {
      name: 'test 5',
      icon: 'https://media.istockphoto.com/id/2194662963/vector/beauty-and-spa-icon-set-solid-icon-collection-vector-illustration-stock-illustration-icon.jpg?s=1024x1024&w=is&k=20&c=0MBAI8bFofbfpTKo4-DbQqGwGMLKBHIvUDoQuhaa7Fg=',
    },
  ];
}
