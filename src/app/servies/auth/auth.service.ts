import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';

@Injectable({ providedIn: 'root' })
export class AuthService {

  API = "https://your-api-url.com/api";

  constructor(private http: HttpClient, private storage: Storage) {
    this.storage.create();
  }

  // LOGIN
  login(data: any) {
    return this.http.post(`${this.API}/login`, data);
  }

  // SIGNUP
  signup(data: any) {
    return this.http.post(`${this.API}/signup`, data);
  }

  // FORGOT PASSWORD
  forgot(data: any) {
    return this.http.post(`${this.API}/forgot-password`, data);
  }

  // RESET PASSWORD
  reset(data: any) {
    return this.http.post(`${this.API}/reset-password`, data);
  }

  // SAVE TOKEN
  saveToken(token: string) {
    return this.storage.set('token', token);
  }

  // GET TOKEN
  getToken() {
    return this.storage.get('token');
  }

  // LOGOUT
  logout() {
    return this.storage.remove('token');
  }
}
