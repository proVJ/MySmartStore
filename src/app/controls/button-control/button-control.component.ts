import { Component, Input, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-butoncontrol',
  templateUrl: './button-control.component.html',
  styleUrls: ['./button-control.component.scss'],
  imports: [MatButtonModule, MatIconModule],
})
export class ButtonControlComponent implements OnInit {
@Input() buttonText: string = '';
@Input() fontIcon: string = '';

  constructor() { }

  ngOnInit() {
  }

}
