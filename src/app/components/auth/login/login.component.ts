import { Component, OnInit } from '@angular/core';
import { IonContent, IonItem, IonIcon, IonInput, IonButton, IonInputPasswordToggle } from "@ionic/angular/standalone";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [IonButton, IonInput, IonIcon, IonItem, IonContent, IonInputPasswordToggle]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async loginWithGoogle() {
    
  }
}
