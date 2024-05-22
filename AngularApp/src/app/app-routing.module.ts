import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './app/core/login/login.component';
import { RegisterComponent } from './app/core/register/register.component';
import { ResetComponent } from './app/core/reset/reset.component';
import { MainPageComponent } from './app/core/main-page/main-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: RegisterComponent,
  },
  {
    path: 'reset',
    component: ResetComponent,
  },
  {
    path: 'mainpage',
    component: MainPageComponent,
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
