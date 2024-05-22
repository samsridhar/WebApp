import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/login-request.model';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  saveData(data: LoginRequest) {
    localStorage.setItem(data.email, JSON.stringify(data));
  }

  // getData() {
  //   const data = localStorage.getItem('myData');
  //   return data ? JSON.parse(data) : null;
  // }
}
