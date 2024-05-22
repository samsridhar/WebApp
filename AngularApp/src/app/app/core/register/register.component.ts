import { Component, OnInit } from '@angular/core';
import { LoginRequest } from '../login/models/login-request.model';
import { Router } from '@angular/router';
import { LocalStorageService } from '../login/services/local-storage.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  model: LoginRequest;
  message: string = '';
  isValid: boolean = false;
  constructor(
    private localStorageService: LocalStorageService,
    private authService: AuthService,
    private router: Router
  ) {
    this.model = {
      email: '',
      password: '',
    };
  }

  ngOnInit() {}

  onFormSubmit(): void {
    // Save user data to local storage
    if (this.authService.login(this.model)) {
      this.message = 'Already Registered';
      this.isValid = false;
    } else {
      this.localStorageService.saveData({
        email: this.model.email,
        password: this.model.password,
      });
      this.message = 'User Registered';
      this.isValid = true;
      this.router.navigate(['mainpage'], {
        queryParams: { email: this.model.email },
      });
    }
  }
}
