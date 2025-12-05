import { Component, OnInit } from '@angular/core';
import { IonContent, IonItem, IonIcon, IonInput, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [IonButton, IonInput, IonIcon, IonItem, IonContent]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
