import { Component, OnInit } from '@angular/core';
import { ItemComponent } from "../../shared/customer/item/item.component";
import {  ItemListComponent } from "../../shared/customer/item-list/item-list.component";

@Component({
  selector: 'app-customer-items',
  templateUrl: './customer-items.component.html',
  styleUrls: ['./customer-items.component.scss'],
  imports: [ItemListComponent ]
})
export class CustomerItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
