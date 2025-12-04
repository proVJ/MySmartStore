import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonContent,
  IonList,
  IonListHeader,
  IonNote,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonRouterLink,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  heartOutline,
  heartSharp,
  archiveOutline,
  archiveSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
  bookmarkOutline,
  bookmarkSharp,
} from 'ionicons/icons';
import { AlertBoxService } from './servies/shared/alert-box.service';
import { AlertBoxComponent } from './components/shared/alert-box/alert-box.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [
    RouterLink,
    RouterLinkActive,
    IonApp,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList,
    IonListHeader,
    IonNote,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterLink,
    IonRouterOutlet,
    CommonModule,
    // AlertBoxComponent
  ],
})
export class AppComponent {
  public appPages = [
    { title: 'Contacts', url: '/folder/Contacts', icon: 'people' },
    { title: 'Business', url: '/folder/Business', icon: 'briefcase' },
    { title: 'Leads', url: '/folder/Leads', icon: 'business' },
    { title: 'Revenue', url: '/folder/Revenue', icon: 'wallet' },
    //{ title: 'Trash', url: '/folder/trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  alertbox_isVisible: boolean = false;
  alertbox_displayMessage: string = '';
  alertbox_IsOk: boolean = false;
  alertbox_IsCancel: boolean = false;
  constructor(private alertBoxService: AlertBoxService) {
    addIcons({
      mailOutline,
      mailSharp,
      paperPlaneOutline,
      paperPlaneSharp,
      heartOutline,
      heartSharp,
      archiveOutline,
      archiveSharp,
      trashOutline,
      trashSharp,
      warningOutline,
      warningSharp,
      bookmarkOutline,
      bookmarkSharp,
    });
    this.initializeBackButtonExit();
    this.getAlertBoxValues();
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
    });
    //this.exitApp();
  }

  initializeBackButtonExit() {
    // App.addListener('backButton', () => {
    //  this.alertBoxService.updateIsVisible(true);
    //   this.alertBoxService.updateDisplayMessage('Exit');
    // });
  }

  // exitApp(){
  //     const okSub = this.alertBoxService.getIsOk().subscribe((isOk: boolean) => {
  //       if (isOk) {
  //         this.alertBoxService.updateIsVisible(false);
  //         this.alertBoxService.updateIsCancel(false);
  //         this.alertBoxService.updateIsOk(false);
  //         App.exitApp();
  //         okSub.unsubscribe();
  //         cancelSub.unsubscribe();
  //       }
  //     });
  //     const cancelSub = this.alertBoxService.getIsCancel().subscribe((isCancel: boolean) => {
  //       if (isCancel) {
  //         this.alertBoxService.updateIsVisible(false);
  //         this.alertBoxService.updateIsCancel(false);
  //         this.alertBoxService.updateIsOk(false);
  //         okSub.unsubscribe();
  //         cancelSub.unsubscribe();
  //       }
  //     });
  // }
}
