import { Injectable } from '@angular/core';
import { LoginRequest } from '../app/core/login/models/login-request.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(data: LoginRequest): boolean {
    let isValid: boolean = false;

    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem(data.email) || '[]');

    //check email present in local storage or not, if present check password
    if (userData == '[]') {
      isValid = false;
    } else if (userData.password == data.password) {
      isValid = true;
    }
    return isValid;
  }
}
