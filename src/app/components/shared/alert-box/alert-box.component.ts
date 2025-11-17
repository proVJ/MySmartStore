import { Component, OnInit } from '@angular/core';
import { IonAlert} from '@ionic/angular/standalone';
import type { OverlayEventDetail } from '@ionic/core';
import { AlertBoxService } from 'src/app/servies/shared/alert-box.service';
@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.css'],
  imports: [ IonAlert]
})
export class AlertBoxComponent implements OnInit {
  alertbox_isVisible: boolean = false;
  alertbox_displayMessage: string = '';
  alertbox_IsOk: boolean = false;
  alertbox_IsCancel: boolean = false;
  constructor(private alertBoxService: AlertBoxService) { }

  ngOnInit() {
    this.getAlertBoxValues();
  }

  alertButtons: any[] = [];

  setResult(event: CustomEvent<OverlayEventDetail>) {
    console.log(`Dismissed with role: ${event.detail.role}`);
  }

   getAlertBoxValues() {
    this.alertBoxService.getIsVisible().subscribe((value: boolean) => {
      this.alertbox_isVisible = value;
    });
    this.alertBoxService.getIsOk().subscribe((value: boolean) => {
      this.alertbox_IsOk = value;
    });
    this.alertBoxService.getIsCancel().subscribe((value: boolean) => {
      this.alertbox_IsCancel = value;
    });
    this.alertBoxService.getDisplayMessage().subscribe((message: string) => {
      this.alertbox_displayMessage = message;
      this.updateAlertButtons();
    });
  }
  updateAlertButtons() {
    this.alertButtons =  [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        this.alertBoxService.updateIsCancel(true);
        this.alertBoxService.updateIsOk(false);
        // console.log('Alert canceled');
      },
    },
    {
      text: this.alertbox_displayMessage,
      role: 'confirm',
      handler: () => {
        // console.log('Exit?');
          this.alertBoxService.updateIsCancel(false);
        this.alertBoxService.updateIsOk(true);
      },
    },
  ];
  }

}
