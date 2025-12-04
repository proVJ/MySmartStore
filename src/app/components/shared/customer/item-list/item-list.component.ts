import { Component, OnInit } from '@angular/core';
import {  IonContent, IonGrid, IonRow, IonCol } from "@ionic/angular/standalone";
import { MatGridListModule } from '@angular/material/grid-list';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
  imports: [IonCol, IonRow, IonGrid, IonContent,MatGridListModule ]
})
export class ItemListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
