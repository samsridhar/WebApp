import { Component } from '@angular/core';
import { LoginRequest } from './models/login-request.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  model: LoginRequest;
  message: string = '';
  loginError: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    this.model = {
      email: '',
      password: '',
    };
  }
  onFormSubmit(): void {
    // Call the authentication service to validate the credentials
    const isValid = this.authService.login(this.model);

    if (isValid) {
      // Redirect or perform any action upon successful login
      console.log('Login successful!');
      this.router.navigate(['mainpage'], {
        queryParams: { email: this.model.email },
      });
      this.loginError = false;
    } else {
      // Show login error
      console.log('Invalid credentials');
      this.message = 'Invalid credentials';
      this.loginError = true;
    }
  }

  ResetPassword(): void {
    this.router.navigate(['reset']);
  }
}
