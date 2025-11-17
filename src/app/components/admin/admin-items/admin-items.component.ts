import { Component, OnInit } from '@angular/core';
import { ItemListComponent } from "../../shared/customer/item-list/item-list.component";

@Component({
  selector: 'app-admin-items',
  templateUrl: './admin-items.component.html',
  styleUrls: ['./admin-items.component.scss'],
  imports: [ItemListComponent]
})
export class AdminItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
