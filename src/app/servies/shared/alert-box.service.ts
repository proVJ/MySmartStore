import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertBoxService {
  isVisible = new BehaviorSubject(false);
  isOk = new BehaviorSubject(false);
  isCancel = new BehaviorSubject(false);

  displayMessage = new BehaviorSubject('');
  constructor() {}

  updateIsVisible(value: boolean) {
    this.isVisible.next(value);
  }
  getIsVisible() {
    return this.isVisible.asObservable();
  }
  updateDisplayMessage(message: string) {
    this.displayMessage.next(message);
  }
  getDisplayMessage() {
    return this.displayMessage.asObservable();
  }

  updateIsOk(value: boolean) {
    this.isVisible.next(value);
  }
  getIsOk() {
    return this.isVisible.asObservable();
  }
   updateIsCancel(value: boolean) {
    this.isVisible.next(value);
  }
  getIsCancel() {
    return this.isVisible.asObservable();
  }
}
